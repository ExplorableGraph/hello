import graph from "./object.js";

const wrapper = {
  async *[Symbol.asyncIterator]() {
    for await (const key of graph) {
      yield key;
    }
  },

  async get(key) {
    const value = await graph.get(key);
    return value;
  },
};

export default wrapper;
