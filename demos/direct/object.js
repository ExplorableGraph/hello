const obj = {
  "goodbye.md": `# Goodbye

  This is the goodbye file.
`,
  "hello.md": `# Hello

Hello, world.
`,
};

export default {
  async *[Symbol.asyncIterator]() {
    yield* Object.keys(obj);
  },

  async get(key) {
    return obj[key];
  },
};
