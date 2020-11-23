import { AsyncExplorableObject } from "@explorablegraph/async";

const graph = new AsyncExplorableObject({
  a: "Hello, a.",
  b: "Hello, b.",
  c: "Hello, c.",
});

for await (const key of graph) {
  console.log(await graph[AsyncExplorableObject.get](key));
}
