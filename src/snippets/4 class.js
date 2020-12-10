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
