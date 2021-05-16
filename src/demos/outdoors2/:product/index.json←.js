export default async function () {
  const { product } = this.params;
  if (product === undefined) {
    return undefined;
  }
  const productFolder = await this.get("..", product);
  const descriptionBuffer = await productFolder.get("description");
  const description = descriptionBuffer?.toString() ?? null;
  const photo = (await productFolder.get("photo.jpg")) ? "photo.jpg" : null;
  return {
    product,
    description,
    photo,
  };
}
