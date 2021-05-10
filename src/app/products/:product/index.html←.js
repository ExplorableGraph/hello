export default async function () {
  const { product } = this.params;
  const realFolder = await this.get("..", product);
  const description = await realFolder.get("description");
  return `
    <h1>${product}</h1>
    <p>${description}</p>
  `;
}
