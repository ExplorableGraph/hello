// Direct ExplorableGraph representation of a function and domain
export default {
  // Return the keys in this graph
  // => ["Alice", "Bob", "Carol"]
  async *[Symbol.asyncIterator]() {
    yield* ["Alice", "Bob", "Carol"];
  },

  // Get the value of a given key
  // get("Alice") => "Hello, Alice."
  async get(key) {
    return `Hello, ${key}! This is a graph.`;
  },
};
