import { ExplorableObject } from "@explorablegraph/explorable";

export default async function () {
  const data = new ExplorableObject(await this.get("step1.json"));
  return await data.mapValues((value) => `Hello, ${value}.`);
}
