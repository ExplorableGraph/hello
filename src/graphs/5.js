import { get, keys } from "@explorablegraph/exfn";

const letters = ["a", "b", "c", "d", "e", "f", "g", "i", "j"];

export default {
  [keys]() {
    return ["index.html", ...letters][Symbol.iterator]();
  },

  "index.html": letters
    .map((letter) => `<li><a href="${letter}">${letter}</a></li>`)
    .join(""),

  secret: "You have found the secret page!",

  [get](key) {
    return this[key] || `Hello, ${key}.`;
  },
};
