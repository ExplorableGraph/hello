const obj = {
  "goodbye.md": `# Goodbye\n`,
  "hello.md": `# Hello\n`,
};

export default {
  async *[Symbol.asyncIterator]() {
    yield* Object.keys(obj);
  },

  async get(key) {
    return obj[key];
  },
};
