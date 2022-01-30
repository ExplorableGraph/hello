// Explorable interface
const graph = {
  // Function domain
  async *[Symbol.asyncIterator]() {
    const domain = ["Alice.md", "Bob.md", "Carol.md"];
    for (const key of domain) {
      yield key;
    }
  },

  // Function itself: return the value for a key
  async get(key) {
    const name = key.slice(0, key.length - 3);
    const value = `Hello, **${name}**.`;
    return value;
  },
};

for await (const key of graph) {
  const value = await graph.get(key);
  console.log(`${key}: ${value}`);
}
