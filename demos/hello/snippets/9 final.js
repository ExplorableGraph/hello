import { Compose, get } from "@explorablegraph/core";
import { Files } from "@explorablegraph/node";
import { DefaultPages } from "@explorablegraph/web";
import path from "path";
import { fileURLToPath } from "url";
const dirname = path.dirname(fileURLToPath(import.meta.url));

const letters = ["a", "b", "c"];

class GreetingPages {
  constructor(greeting) {
    this.greeting = greeting;
  }

  async *[Symbol.asyncIterator]() {
    yield* letters;
  }

  [get](key) {
    return key === "index.html" || key.startsWith(".")
      ? undefined
      : `${this.greeting}, ${key}.`;
  }
}

export default new Compose(
  new Files(path.join(dirname, "static")),
  new DefaultPages({
    english: new GreetingPages("Hello"),
    french: new GreetingPages("Bonjour"),
    spanish: new GreetingPages("Hola"),
  })
);
