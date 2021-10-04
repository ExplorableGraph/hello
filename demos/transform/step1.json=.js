export default async function () {
  const data = await this.get("data.json");
  return `${data.toUpperCase()}`;
}
