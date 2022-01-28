import path from "path";
import rehype from "./rehype.js";

export default function markdownsToHtmls(markdownGraph) {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const markdownKey of markdownGraph) {
        yield htmlKey(markdownKey);
      }
    },

    async get(htmlKey) {
      const key = markdownKey(htmlKey);
      const markdown = await markdownGraph.get(key);
      const html = markdown !== undefined ? await rehype(markdown) : undefined;
      return html;
    },
  };
}

function htmlKey(markdownKey) {
  const isMarkdown = path.extname(markdownKey) === ".md";
  const key = isMarkdown
    ? `${path.basename(markdownKey, ".md")}.html`
    : markdownKey;
  return key;
}

function markdownKey(htmlKey) {
  const isHtml = path.extname(htmlKey) === ".html";
  const key = isHtml ? `${path.basename(htmlKey, ".html")}.md` : htmlKey;
  return key;
}
