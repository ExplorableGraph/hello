import { ObjectGraph } from "@explorablegraph/graph";

const letters = ["a", "b", "c", "d", "e", "f", "g", "i", "j"];

export default new ObjectGraph(
  new Proxy(
    {
      *[Symbol.asyncIterator]() {
        yield* ["index.html", ...letters];
      },

      "index.html": letters
        .map((letter) => `<li><a href="${letter}">${letter}</a></li>`)
        .join(""),

      secret: "You have found the secret page!",
    },
    {
      get(target, key) {
        return target[key] || `Hello, ${key}.`;
      },
    }
  )
);
