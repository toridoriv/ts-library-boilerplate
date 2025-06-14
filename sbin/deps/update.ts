#!/usr/bin/env -S node --experimental-transform-types --disable-warning=ExperimentalWarning
import { execSync } from "node:child_process";

import semver from "semver";

import { getPackageJson, parseFlags } from "../utils.ts";

const { flags } = parseFlags<{ name: string; title: string; scope: string }>(process.argv.slice(2), {
  flags: [
    {
      name: "name",
      aliases: ["n"],
      type: "string",
    },
    {
      name: "title",
      aliases: ["t"],
      type: "string",
      optionalValue: true,
      default: "",
    },
    {
      name: "scope",
      aliases: ["s"],
      type: "string",
      optionalValue: true,
      default: "",
    },
  ],
});

const packageJson = getPackageJson();
const dependency: DependencyDetails = {
  name: flags.name,
  current: packageJson.getDependencyVersion(flags.name),
  latest: "",
  isDevelopment: packageJson.isDevelopmentDependency(flags.name),
  title: flags.title || flags.name,
  get scope() {
    return flags.scope || (this.isDevelopment ? "development" : "build");
  },
};

updateVersion(dependency);
commitChange(dependency);

function getVersions(dependency: string): string[] {
  const output = execSync(`npm view ${dependency} versions --json`, { encoding: "utf-8" });

  return JSON.parse(output);
}

function isPrerelease(version: string): boolean {
  return semver.prerelease(version) !== null;
}

function isNotPrerelease(version: string): boolean {
  return semver.prerelease(version) === null;
}

function passthrough(_version: string): boolean {
  return true;
}

function getNewerVersions(dependency: string, current: string): string[] {
  const validate = isPrerelease(current) ? passthrough : isNotPrerelease;
  let versions = getVersions(dependency).sort(semver.rcompare).filter(validate);

  const currentIndex = versions.findIndex((v) => v === current);

  if (currentIndex === -1) {
    return versions;
  }

  return versions.slice(0, currentIndex);
}

function updateVersion(dependency: DependencyDetails) {
  const latest = getNewerVersions(dependency.name, dependency.current)[0];

  if (!latest) {
    console.log(`No newer versions found for ${dependency.name} (current: ${dependency.current}).`);
    process.exit(0);
  }

  execSync(`npm install ${dependency.name}@${latest}`, { stdio: "inherit" });

  console.log(`Updated ${dependency.name} to version ${latest}.`);

  dependency.latest = latest;
}

type DependencyDetails = {
  name: string;
  current: string;
  latest: string;
  isDevelopment: boolean;
  title: string;
  scope: string;
};

function commitChange(dependency: DependencyDetails) {
  const commitMessage = `⬆️ (${dependency.scope}) Bump ${dependency.title} from ${dependency.current} to ${dependency.latest}`;

  execSync(`git add package.json package-lock.json`, { stdio: "inherit" });
  execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });
  console.log(`Committed changes for ${dependency.name} to version ${dependency.latest}.`);
}
