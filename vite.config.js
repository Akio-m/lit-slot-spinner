import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      name: "lit-slot-spinner",
      fileName: () => `bundle.js`,
      entry: "./index.js",
      format: "umd",
    }
  },
})