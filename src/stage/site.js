import { Compose, Explorable, get, keys } from "@explorablegraph/core";
import { Files } from "@explorablegraph/node";
import { DefaultPages } from "@explorablegraph/web";
import path from "path";
import { fileURLToPath } from "url";
const dirname = path.dirname(fileURLToPath(import.meta.url));

const letters = ["a", "b", "c"];

class GreetingPages extends Explorable {
  constructor(greeting) {
    super();
    this.greeting = greeting;
  }
  [get](key) {
    return !DefaultPages.isDefaultPage(key)
      ? `${this.greeting}, ${key}.`
      : undefined;
  }
  [keys]() {
    return [...letters][Symbol.iterator]();
  }
}

export default new DefaultPages(
  new Compose(new Files(`${dirname}/site`), {
    english: new GreetingPages("Hello"),
    french: new GreetingPages("Bonjour"),
    spanish: new GreetingPages("Hola"),
  })
);
