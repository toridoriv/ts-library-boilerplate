#!/usr/bin/env bun
import { EventEmitter } from "node:events";
import fs from "node:fs";

import { generateDtsBundle } from "dts-bundle-generator";
import prettier from "prettier";

import packageJson from "../package.json" with { type: "json" };

const prettierOpts = await prettier.resolveConfig(packageJson.main, {
  editorconfig: true,
});
const entrypoint = "source/main.ts";
const emitter = new EventEmitter<{ generated: { kind: "main" | "typings"; text: string }[] }>({
  captureRejections: true,
});

emitter.on("generated", async ({ kind, text }) => {
  const formatted = await prettier.format(text, prettierOpts || {});
  const path = packageJson[kind];
  const dir = path.substring(0, path.lastIndexOf("/"));

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path, formatted, "utf-8");
});

getJavascriptCode(entrypoint);
generateDeclaration(entrypoint);

async function getJavascriptCode(mainFile: string) {
  const { success, outputs, logs } = await Bun.build({
    entrypoints: [mainFile],
    minify: process.env.NODE_ENV === "production",
    target: "node",
    env: "disable",
    banner: "// @ts-nocheck\n/* eslint-disable */\n",
    packages: "bundle",
  });

  if (!success) {
    for (const log of logs) {
      console.error(log);
    }

    process.exit(1);
  }

  const entrypoints: string[] = [];

  for (const output of outputs) {
    const content = await output.text();

    switch (output.kind) {
      case "entry-point":
        entrypoints.push(content);
        break;
      default:
        console.info(`The output of kind ${output.kind} does not have a handler...`);
    }
  }

  emitter.emit("generated", { kind: "main", text: entrypoints.join("\n") });
}

async function generateDeclaration(mainFile: string) {
  const result = generateDtsBundle(
    [
      {
        filePath: mainFile,
        outFile: packageJson.typings,
        noCheck: true,
        output: {
          exportReferencedTypes: false,
          inlineDeclareExternals: true,
          sortNodes: true,
          noBanner: true,
        },
        libraries: {
          inlinedLibraries: ["prettier"],
        },
        failOnClass: false,
      },
    ],
    {
      preferredConfigPath: "./tsconfig.bundle.json",
    },
  );

  result.unshift("// @ts-nocheck\n/* eslint-disable */\n");

  emitter.emit("generated", { kind: "typings", text: result.join("\n") });
}

declare module "dts-bundle-generator" {
  interface EntryPointConfig {
    outFile?: string;
    noCheck?: boolean;
  }
}
