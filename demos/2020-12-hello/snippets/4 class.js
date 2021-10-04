import { get, keys } from "@explorablegraph/core";

const letters = ["a", "b", "c"];

class GreetingPages {
  constructor(greeting) {
    this.greeting = greeting;
  }
  [get](key) {
    return `${this.greeting}, ${key}.`;
  }
  [keys]() {
    return letters[Symbol.iterator]();
  }
}
