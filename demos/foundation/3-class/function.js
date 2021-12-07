import { ExplorableFunction } from "@explorablegraph/explorable";

export default new ExplorableFunction(
  (key) => `Hello, ${key}! This is a function.`,
  ["Alice", "Bob", "Carol"]
);
