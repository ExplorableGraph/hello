import { Graph } from "@explorablegraph/graph";

const graph = Graph.from({
  a: "Hello, a.",
  b: "Hello, b.",
  c: "Hello, c.",
});

for await (const key of graph) {
  console.log(await graph.get(key));
}
