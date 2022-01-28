export default async function plain(graph) {
  const result = {};
  for await (const key of graph) {
    const value = await graph.get(key);
    result[String(key)] = isExplorable(value)
      ? await this.plain(value) // Traverse into explorable value.
      : value;
  }
  return result;
}

function isExplorable(obj) {
  return (
    typeof obj?.[Symbol.asyncIterator] === "function" &&
    typeof obj?.get === "function"
  );
}
