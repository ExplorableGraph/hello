import { get, keys } from "@explorablegraph/core";

const letters = ["a", "b", "c", "d", "e", "f", "g", "i", "j"];

export default {
  *[keys]() {
    yield* ["index.html", ...letters];
  },

  [get](key) {
    if (key === "index.html") {
      const links = letters
        .map((letter) => `<li><a href="${letter}">${letter}</a></li>`)
        .join("");
      return `<ul>${links}</ul>`;
    } else {
      return `Hello, ${key}.`;
    }
  },
};
