const obj = {
  "goodbye.md": `# Goodbye\n`,
  "hello.md": `# Hello\n`,
};

const graph = {
  async *[Symbol.asyncIterator]() {
    for await (const key of Object.keys(obj)) {
      yield key;
    }
  },

  async get(key) {
    return obj[key];
  },
};

for await (const key of graph) {
  const value = await graph.get(key);
  console.log(`${key}: ${value}`);
}
