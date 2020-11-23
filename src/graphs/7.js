import { constants, Graph } from "@explorablegraph/graph";

const letters = ["a", "b", "c", "d", "e", "f", "g", "i", "j"];
const routes = ["index.html", ...letters];

export default Graph.from({
  *[Symbol.asyncIterator]() {
    yield* routes;
  },

  [constants.asyncIteratorStringKey]: JSON.stringify(routes, null, 2),

  "index.html": letters
    .map((letter) => `<li><a href="${letter}">${letter}</a></li>`)
    .join(""),

  secret: "You have found the secret page!",

  async get(key) {
    return this.source[key] || `Hello, ${key}.`;
  },
});
