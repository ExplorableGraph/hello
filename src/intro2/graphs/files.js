import { ExplorableFiles } from "@explorablegraph/explorable";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "files"
);
export default new ExplorableFiles(dirname);
