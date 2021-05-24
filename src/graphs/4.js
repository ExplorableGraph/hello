const letters = ["a", "b", "c", "d", "e", "f", "g", "i", "j"];
const routes = ["index.html", ...letters];

export default {
  async *[Symbol.asyncIterator]() {
    yield* routes;
  },

  "index.html": letters
    .map((letter) => `<li><a href="${letter}">${letter}</a></li>`)
    .join(""),

  async get(key) {
    return this[key] || `Hello, ${key}.`;
  },
};
