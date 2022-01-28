import graph from "./object.js";
import rehype from "./rehype.js";

export default {
  async *[Symbol.asyncIterator]() {
    for await (const key of graph) {
      yield key;
    }
  },

  async get(key) {
    const markdown = await graph.get(key);
    const html = markdown !== undefined ? await rehype(markdown) : undefined;
    return html;
  },
};
