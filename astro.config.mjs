import { defineConfig } from "astro/config";
import rehypeMermaid from "rehype-mermaid";
import rehypeShikiji from "rehype-shikiji";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeMermaid, [rehypeShikiji, { theme: "github-dark" }]],
    syntaxHighlight: false,
  },
});
