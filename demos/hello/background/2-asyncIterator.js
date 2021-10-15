const explorableObj = {
  async *[Symbol.asyncIterator]() {
    for (let i = 1; i <= 10; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      yield i;
    }
  },
};

for await (const n of explorableObj) {
  console.log(n);
}
