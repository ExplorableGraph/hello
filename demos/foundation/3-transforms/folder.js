import * as fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "../people");

// ExplorableGraph representation of the folder above
export default {
  // Return the keys in this graph
  // => ["Alice", "Bob", "Carol"]
  async *[Symbol.asyncIterator]() {
    yield* await fs.readdir(dirname);
  },

  // Get the value of a given key
  // get("Alice") => "Hello, Alice."
  async get(key) {
    return await fs.readFile(path.join(dirname, key));
  },
};
