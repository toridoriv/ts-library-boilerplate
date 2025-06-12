import { readFileSync } from "node:fs";
import { findPackageJSON } from "node:module";

import * as flags from "@cliffy/flags";

import type { Expand } from "#typings";

// flags.ParseFlagsContext<Record<string, any>, flags.FlagOptions> & flags.ParseFlagsContext<Record<string, unknown>, T>

export type ParseFlagsResult<T extends Record<string, any>> = Expand.Recursive<
  flags.ParseFlagsContext<Record<string, any>, flags.FlagOptions> &
    flags.ParseFlagsContext<Record<string, unknown>> & { flags: T }
>;

export function parseFlags<T extends Record<string, any>>(args: string[], options: flags.ParseFlagsOptions) {
  return flags.parseFlags(args, options) as ParseFlagsResult<T>;
}

export interface PackageJson {
  name: string;
  version: string;
  description: string;
  dependencies?: { [key: string]: string };
  devDependencies?: { [key: string]: string };
  peerDependencies?: { [key: string]: string };
  optionalDependencies?: { [key: string]: string };
  scripts?: { [key: string]: string };
}

export class PackageJson {
  getDependencyVersion(name: string): string {
    const version =
      this.dependencies?.[name] ||
      this.devDependencies?.[name] ||
      this.peerDependencies?.[name] ||
      this.optionalDependencies?.[name];

    if (!version) {
      throw new Error(`Dependency "${name}" not found in package.json.`);
    }

    return version.replace("^", "").replace("~", "");
  }

  isDevelopmentDependency(name: string): boolean {
    return !!this.devDependencies?.[name];
  }
}

export function getPackageJson(from: string = import.meta.url): PackageJson {
  const path = findPackageJSON(from);

  if (!path) {
    throw new Error("Package.json not found.");
  }

  return Object.setPrototypeOf(JSON.parse(readFileSync(path, "utf-8")), PackageJson.prototype);
}

// export function getDependencyVersion(packageJson: PackageJson, dependency: string) {}
