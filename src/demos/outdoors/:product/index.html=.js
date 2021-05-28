export default async function () {
  const { product } = this.params;
  if (product === undefined) {
    return undefined;
  }
  const productFolder = await this.get("..", product);
  const description = (await productFolder.get("description")) ?? "";
  const photo = await productFolder.get("photo.jpg");
  const img = photo ? `<img src="photo.jpg">` : "";
  return `<h1>${product}</h1>
<p>${description}</p>
${img}`;
}
