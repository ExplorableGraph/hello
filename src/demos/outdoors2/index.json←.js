export default async function () {
  const data = {};
  for await (const key of this) {
    if (/^[A-Z]/.test(key)) {
      const value = await this.get(key);
      // const obj =
      //   value instanceof ExplorableGraph ? await value.plain() : value;
      // data[key] = obj;
      const description = String(await value.get("description"));
      data[key] = {
        description,
      };
    }
  }
  return data;
}
