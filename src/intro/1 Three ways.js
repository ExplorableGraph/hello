// Display all the (key, value) pairs of an in-memory object.
const obj = {
  a: "Hello, a",
  b: "Hello, b",
  c: "Hello, c",
};
for (const key in obj) {
  console.log(key, obj[key]);
}

// Display all the (file name, file contents) pairs in the current folder.
import { promises as fs } from "fs";
import path from "path";
import process from "process";
const folder = process.cwd();
const files = await fs.readdir(folder);
for (const fileName of files) {
  const filePath = path.join(folder, fileName);
  const buffer = await fs.readFiles(filePath);
  const text = String(buffer);
  console.log(fileName, text);
}

// Display all the (route, resource) results at a given net location.
// E.g. for site.com/a, site.com/b, site.com/c, get all those resources.
// import fetch from "node-fetch"; // Node doesn't have fetch yet.
const siteUrl = "https://site.com";
const routes = ["a", "b", "c"]; // How can we get this list automatically? */
for (const route of routes) {
  const pageUrl = new URL(route, siteUrl);
  const resource = await fetch(pageUrl.href);
  console.log(route, resource);
}
