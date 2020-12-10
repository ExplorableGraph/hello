const keys = Symbol();
const get = Symbol();

// Display all the (key, value) pairs of an in-memory object.
const obj = new Explorable({
  a: "Hello, a",
  b: "Hello, b",
  c: "Hello, c",
});
await display(obj);

// Display all the (file name, file contents) pairs in the current folder.
import process from "process";
const folder = new Files(process.cwd());
await display(folder);

// Display all the (route, resource) results at a given net location.
const site = new ExporableSite("https://site.com");
await display(site);

// Display any object's (key, value) pairs.
async function display(obj) {
  for await (const key of obj[keys]()) {
    console.log(key, await obj[get](key));
  }
}
