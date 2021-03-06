// Display all the (key, value) pairs of an in-memory object.
const obj = {
  a: "Hello, a",
  b: "Hello, b",
  c: "Hello, c",
};
const objKeys = (obj) => Object.keys(obj);
const objGet = (obj, key) => obj[key];
for (const key in objKeys(obj)) {
  console.log(key, objGet(obj, key));
}

// Display all the (file name, file contents) pairs in the current folder.
import { promises as fs } from "fs";
import path from "path";
import process from "process";
const folder = process.cwd();
const folderKeys = async (obj) => await fs.readdir(obj);
const folderGet = async (obj, key) =>
  String(await fs.readFiles(path.join(obj, key)));
for await (const key of folderKeys(folder)) {
  console.log(key, await folderGet(folder, key));
}

// Display all the (route, resource) results at a given net location.
// E.g. for site.com/a, site.com/b, site.com/c, get all those resources.
// import fetch from "node-fetch"; // Node doesn't have fetch yet.
const siteUrl = "https://site.com";
const siteKeys = () => ["a", "b", "c"]; // How can we get this list automatically? */
const siteGet = async (obj, key) => await fetch(new URL(key, obj).href);
for await (const key of siteKeys(siteUrl)) {
  console.log(key, await siteGet(siteUrl, key));
}
