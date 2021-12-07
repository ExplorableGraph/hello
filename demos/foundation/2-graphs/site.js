import fetch from "node-fetch"; // Node doesn't have fetch yet.

const href =
  "https://explorablegraph-hello.herokuapp.com/demos/foundation/service/";

// ExplorableGraph representation of the URL above
export default {
  // Return the keys in this graph
  // => ["Alice", "Bob", "Carol"]
  async *[Symbol.asyncIterator]() {
    const url = new URL(".keys.json", href);
    const response = await fetch(url.href);
    const keys = await response.json();
    yield* keys;
  },

  // Get the value of a given key
  // get("Alice") => "Hello, Alice."
  async get(key) {
    const url = new URL(key, href);
    const response = await fetch(url.href);
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  },
};
