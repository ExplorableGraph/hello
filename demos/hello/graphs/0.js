import { ExplorableObject } from "@explorablegraph/explorable";

const graph = new ExplorableObject({
  a: "Hello, a.",
  b: "Hello, b.",
  c: "Hello, c.",
});

for await (const key of graph) {
  const value = await graph.get(key);
  console.log(value);
}
