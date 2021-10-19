// An object with data
const obj = {
  Alice: "Hello, Alice.",
  Bob: "Hello, Bob.",
  Carol: "Hello, Carol.",
};

// ExplorableGraph representation of the object above
export default {
  // Return the keys in this graph
  // => ["Alice", "Bob", "Carol"]
  async *[Symbol.asyncIterator]() {
    yield* Object.keys(obj);
  },

  // Get the value of a given key
  // get("Alice") => "Hello, Alice."
  async get(key) {
    return obj[key];
  },
};
