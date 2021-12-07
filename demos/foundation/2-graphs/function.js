function fn(name) {
  return `Hello, ${name}! This is a function.`;
}

const domain = ["Alice", "Bob", "Carol"];

// ExplorableGraph representation of the function above
export default {
  // Return the keys in this graph
  // => ["Alice", "Bob", "Carol"]
  async *[Symbol.asyncIterator]() {
    yield* domain;
  },

  // Get the value of a given key
  // get("Alice") => "Hello, Alice."
  async get(key) {
    return fn(key);
  },
};
