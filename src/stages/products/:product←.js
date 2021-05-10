export default async function () {
  const { product } = this.params;
  if (product === "index.html") {
    // Not a product
    return;
  }

  const buffer = await this.get("data", product);
  const description = buffer === undefined ? "" : String(buffer);

  return `
    <h1>${product}</h1>
    <p>${description}</p>
  `;
}
