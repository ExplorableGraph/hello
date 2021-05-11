export default function () {
  const name = this.params?.name;
  if (name === undefined || name === "index.html") {
    return undefined;
  }
  return `Hello, ${name}`;
}
