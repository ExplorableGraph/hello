import { Compose, get, keys } from "@explorablegraph/core";
import { Files } from "@explorablegraph/node";
import { IndexPages } from "@explorablegraph/web";
import path from "path";
import { fileURLToPath } from "url";
const dirname = path.dirname(fileURLToPath(import.meta.url));

const letters = ["a", "b", "c"];

const english = {
  [get](key) {
    return key !== "index.html" ? `Hello, ${key}.` : undefined;
  },
  [keys]() {
    return [...letters][Symbol.iterator]();
  },
};

const french = {
  [get](key) {
    return key !== "index.html" ? `Bonjour, ${key}.` : undefined;
  },
  [keys]() {
    return [...letters][Symbol.iterator]();
  },
};

const spanish = {
  [get](key) {
    return key !== "index.html" ? `Hola, ${key}.` : undefined;
  },
  [keys]() {
    return [...letters][Symbol.iterator]();
  },
};

export default new IndexPages(
  new Compose(new Files(`${dirname}/site`), {
    english,
    french,
    spanish,
  })
);
