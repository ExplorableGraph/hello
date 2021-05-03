import path from "path";

export default async function () {
  const dataFolder = await this.get("data");
  const dataFiles = await dataFolder.keys();
  const products = dataFiles((dataFile) => path.basename(dataFile));
  return products;
}
