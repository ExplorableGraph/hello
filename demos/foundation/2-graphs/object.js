// An object with data
const obj = {
  Alice: "Hello, Alice! This is an object.",
  Bob: "Hello, Bob! This is an object.",
  Carol: "Hello, Carol! This is an object.",
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
