import rehype from "./rehype.js";

export default function mdToHtml(graph) {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const key of graph) {
        yield htmlKey(key);
      }
    },

    async get(key) {
      const markdown = await graph.get(key);
      const html = markdown !== undefined ? await rehype(markdown) : undefined;
      return html;
    },
  };
}
