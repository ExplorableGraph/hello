import { ExplorableFiles } from "@explorablegraph/explorable";
import path from "path";
import { fileURLToPath } from "url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const filesFolder = path.resolve(moduleFolder, "markdown");

export default new ExplorableFiles(filesFolder);
