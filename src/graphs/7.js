const letters = ["a", "b", "c", "d", "e", "f", "g", "i", "j"];
const routes = ["index.html", ...letters];

export default {
  *[Symbol.asyncIterator]() {
    yield* routes;
  },

  "index.html": letters
    .map((letter) => `<li><a href="${letter}">${letter}</a></li>`)
    .join(""),

  secret: "You have found the secret page!",

  async get(key) {
    return this[key] || `Hello, ${key}.`;
  },

  // TODO: Get this key from web package.
  ".keys.json": JSON.stringify(routes, null, 2),
};
