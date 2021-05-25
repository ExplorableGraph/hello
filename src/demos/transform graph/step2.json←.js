import { ExplorableGraph, ExplorableObject } from "@explorablegraph/explorable";

export default async function () {
  const data = new ExplorableObject(await this.get("step1.json"));
  return await ExplorableGraph.mapValues(data, (value) => `Hello, ${value}.`);
}
