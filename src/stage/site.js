import { Cache, Compose, get, keys } from "@explorablegraph/core";
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
  [get](key) {
    return !DefaultPages.isDefaultPage(key)
      ? `${this.greeting}, ${key}.`
      : undefined;
  }
  [keys]() {
    return [...letters][Symbol.iterator]();
  }
}

export default new Compose(
  new Files(`${dirname}/static`),
  new Cache(
    new Files(`${dirname}/cache`),
    new DefaultPages({
      english: new GreetingPages("Hello"),
      french: new GreetingPages("Bonjour"),
      spanish: new GreetingPages("Hola"),
    })
  )
);
