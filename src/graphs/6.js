import { Explorable, get, keys } from "@explorablegraph/core";

const letters = ["a", "b", "c", "d", "e", "f", "g", "i", "j"];
const routes = ["index.html", ...letters];

class HelloGraph extends Explorable {
  *[keys]() {
    yield* routes;
  }

  [get](key) {
    if (key === "index.html") {
      const links = letters
        .map((letter) => `<li><a href="${letter}">${letter}</a></li>`)
        .join("");
      return `<ul>${links}</ul>`;
    } else if (key === "secret") {
      return "You have found the secret page!";
    } else {
      return `Hello, ${key}.`;
    }
  }
}

export default new HelloGraph();
