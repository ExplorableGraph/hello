import { ExplorableGraph, ExplorableObject } from "@explorablegraph/explorable";

export default async function () {
  const data = new ExplorableObject(await this.get("data.json"));
  return await ExplorableGraph.mapValues(data, (value) => value.toUpperCase());
}
