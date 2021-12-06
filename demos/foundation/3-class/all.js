import {
  ExplorableFiles,
  ExplorableFunction,
  ExplorableObject,
  ExplorableSite,
} from "@explorablegraph/explorable";
import path from "path";
import { fileURLToPath } from "url";

// Graph #1: an object
const object = new ExplorableObject({
  Alice: "Hello, Alice.",
  Bob: "Hello, Bob.",
  Carol: "Hello, Carol.",
});

// Graph #2: a folder
const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const peopleFolder = path.resolve(moduleFolder, "../people");
const folder = new ExplorableFiles(peopleFolder);

// Graph #3: a function and domain
const fn = new ExplorableFunction(
  (key) => `Hello, ${key}.`,
  ["Alice", "Bob", "Carol"]
);

// Graph #4: a website
const site = new ExplorableSite(
  "https://explorablegraph.github.io/videos/approaches/site/"
);

// Compose all those graphs together
export default new ExplorableObject({
  object,
  folder,
  fn,
  site,
});
