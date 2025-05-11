import { defineConfig } from "tsup";

export default defineConfig([
  {
    banner: {
      js: "// @ts-nocheck\n/* eslint-disable */\n",
    },
    bundle: true,
    dts: {
      only: false,
      banner: "// @ts-nocheck\n/* eslint-disable */\n",
      resolve: true,
    },
    entry: ["source/main.ts"],
    format: ["esm", "cjs"],
    outDir: "lib",
    platform: "node",
    shims: true,
    splitting: false,
    target: "esnext",
    tsconfig: "tsconfig.bundle.json",
    treeshake: {
      preset: "smallest",
      moduleSideEffects: "no-external",
      correctVarValueBeforeDeclaration: true,
    },
  },
]);
