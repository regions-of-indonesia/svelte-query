import { defineConfig } from "vite";

import { svelte } from "@sveltejs/vite-plugin-svelte";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [svelte(), dts()],
  build: {
    target: "esnext",
    minify: true,
    lib: {
      entry: ["src/index.ts"],
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["svelte", "@tanstack/svelte-query"],
    },
  },
});
