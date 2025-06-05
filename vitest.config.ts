import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      clean: true,
      enabled: false,
    },
    watch: false,
  },
});
