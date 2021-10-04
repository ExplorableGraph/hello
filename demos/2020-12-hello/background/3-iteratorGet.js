const obj = {
  a: "Hello, a.",
  b: "Hello, b.",
  c: "Hello, c.",
};

const explorableObj = {
  async *[Symbol.asyncIterator]() {
    for (const key in obj) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      yield key;
    }
  },

  async get(key) {
    return obj[key];
  },
};

for await (const key of explorableObj) {
  console.log(await explorableObj.get(key));
}
