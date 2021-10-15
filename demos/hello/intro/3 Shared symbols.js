// Display all the (key, value) pairs of an in-memory object.
const obj = {
  a: "Hello, a",
  b: "Hello, b",
  c: "Hello, c",
  async *[Symbol.asyncIterator]() {
    yield* Object.keys(this);
  },
  async get(key) {
    return this[key];
  },
};
for await (const key of obj) {
  console.log(key, obj.get(key));
}

// Display all the (file name, file contents) pairs in the current folder.
import { promises as fs } from "fs";
import path from "path";
import process from "process";
const folder = {
  dirname: process.cwd(),
  async *[Symbol.asyncIterator]() {
    yield* fs.readdir(this.dirname);
  },
  async get(key) {
    return String(await fs.readFiles(path.join(this.dirname, key)));
  },
};
for await (const key of folder) {
  console.log(key, await folder.get(key));
}

// Display all the (route, resource) results at a given net location.
// E.g. for site.com/a, site.com/b, site.com/c, get all those resources.
// import fetch from "node-fetch"; // Node doesn't have fetch yet.
const site = {
  url: "https://site.com",
  async *[Symbol.asyncIterator]() {
    yield* ["a", "b", "c"]; // How can we get this list automatically? */
  },
  async get(key) {
    return await fetch(new URL(key, this.url).href);
  },
};
for await (const key of site()) {
  console.log(key, await site.get(key));
}
