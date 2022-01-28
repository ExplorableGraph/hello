import * as fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "markdown");

export default {
  async *[Symbol.asyncIterator]() {
    const filenames = await fs.readdir(dirname);
    for (const key of filenames) {
      yield key;
    }
  },

  async get(key) {
    const value = await fs.readFile(path.join(dirname, key));
    return value;
  },
};
