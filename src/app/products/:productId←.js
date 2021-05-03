export default async function () {
  const { productId } = this.params;
  const buffer = await this.get("..", `${productId}.json`);
  if (buffer) {
    const json = String(buffer);
    const data = JSON.parse(json);
    const { name, description } = data;
    return `
      <h1>${name}</h1>
      <p>${description}</p>
  `;
  }
}
