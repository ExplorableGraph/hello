import { Graph } from "@explorablegraph/graph";

const letters = ["a", "b", "c", "d", "e", "f", "g", "i", "j"];

export default Graph.from({
  *[Symbol.asyncIterator]() {
    yield* ["index.html", ...letters];
  },

  "index.html": letters
    .map((letter) => `<li><a href="${letter}">${letter}</a></li>`)
    .join(""),

  secret: "You have found the secret page!",

  async get(key) {
    return this.source[key] || `Hello, ${key}.`;
  },
});
