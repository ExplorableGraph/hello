export default async function () {
  const data = await this.get("step1.json");
  return `"${data}${data}"`;
}
