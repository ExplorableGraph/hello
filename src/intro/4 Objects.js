const keys = Symbol();
const get = Symbol();

// Display all the  (key, value) pairs of an in-memory object.
const obj = {
  a: "Hello, a",
  b: "Hello, b",
  c: "Hello, c",
  [keys]() {
    return Object.keys(this);
  },
  [get](key) {
    return this[key];
  },
};
await display(obj);

// Display all the (file name, file contents) pairs in the current folder.
import { promises as fs } from "fs";
import path from "path";
import process from "process";
const folder = {
  dirname: process.cwd(),
  async [keys]() {
    return fs.readdir(this.dirname);
  },
  async [get](key) {
    return String(await fs.readFiles(path.join(this.dirname, key)));
  },
};
await display(folder);

// Display all the (route, resource) results at a given net location.
// E.g. for site.com/a, site.com/b, site.com/c, get all those resources.
// import fetch from "node-fetch"; // Node doesn't have fetch yet.
const site = {
  url: "https://site.com",
  async [keys]() {
    return ["a", "b", "c"]; // How can we get this list automatically? */
  },
  async [get](key) {
    return await fetch(new URL(key, this.url).href);
  },
};
await display(site);

// Display any object's (key, value) pairs.
async function display(obj) {
  for await (const key of obj[key]()) {
    console.log(key, await obj[get](key));
  }
}
