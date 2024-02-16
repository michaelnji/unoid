import { resolve } from "path";
import { defineConfig } from "vite";
import banner from "vite-plugin-banner";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import removeConsole from "vite-plugin-remove-console";
import dts from 'vite-plugin-dts';
import pkg from "./package.json";

/// <reference types="vitest" />
/** @type {import('vite').UserConfig} */
export default defineConfig({
  test: {
    reporters: ["html", "default"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./tests-c/unit/coverage",
    },
  },
  plugins: [
    dts({ 
      rollupTypes: true ,
     
    }),
    nodePolyfills(),
    removeConsole(),
    banner(
      `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`,
    ),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "unoid",
      fileName: "unoid",
    },
  },
});
