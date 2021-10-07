import { ExplorableGraph } from "@explorablegraph/explorable";

export default async function (graph, mapFn) {
  return ExplorableGraph.map(graph, mapFn);
}
