import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://attomate.ai",
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
});
