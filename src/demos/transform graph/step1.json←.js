import { ExplorableObject } from "@explorablegraph/explorable";

export default async function () {
  const data = new ExplorableObject(await this.get("data.json"));
  return await data.mapValues((value) => value.toUpperCase());
}
