export default async function () {
  const data = {};
  for await (const key of this) {
    if (/^[A-Z]/.test(key)) {
      data[key] = {};
    }
  }
  return data;
}
