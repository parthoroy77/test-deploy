import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/server.ts"],
  format: ["cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "./dist",
  external: ["@repo/utils", "@repo/prisma"],
  noExternal: ["@repo/utils", "@repo/prisma"],
});
