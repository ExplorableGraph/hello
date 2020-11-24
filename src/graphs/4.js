import { AsyncExplorableObject } from "@explorablegraph/async";

const letters = ["a", "b", "c", "d", "e", "f", "g", "i", "j"];

export default new AsyncExplorableObject({
  *[Symbol.asyncIterator]() {
    yield* ["index.html", ...letters];
  },

  "index.html": letters
    .map((letter) => `<li><a href="${letter}">${letter}</a></li>`)
    .join(""),

  async [AsyncExplorableObject.get](key) {
    return this[key] || `Hello, ${key}.`;
  },
});
