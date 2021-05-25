// Display all the (key, value) pairs of an in-memory object.
const obj = new ExplorableObject({
  a: "Hello, a",
  b: "Hello, b",
  c: "Hello, c",
});
await display(obj);

// Display all the (arg, result) pairs generated by a function.
const fn = new ExplorableFunction(
  (key) => `Hello, ${key}.`,
  ["Alice", "Bob", "Carol"]
);
await display(fn);

// Display all the (file name, file contents) pairs in the current folder.
import process from "process";
const files = new ExplorableFiles(process.cwd());
await display(files);

// Display all the (route, resource) results at a given net location.
// const site = new ExporableSite("https://site.com");
const site = new ExporableSite(
  "https://explorablegraph.github.io/hello/src/intro2/graphs/site/"
);
await display(site);

// Display any graph's (key, value) pairs.
async function display(graph) {
  for await (const key of graph()) {
    const value = await graph.get(key);
    console.log(key, value);
  }
}
