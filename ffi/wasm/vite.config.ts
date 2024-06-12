import { resolve } from "path";
import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import dtsPlugin from "vite-plugin-dts";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "@devolutions/picky",
      fileName: "picky",
      formats: ["es", "umd"],
    },
  },
  plugins: [wasm(), topLevelAwait(), dtsPlugin({ rollupTypes: true })],
});
