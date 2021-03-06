import { ExplorableApp } from "@explorablegraph/explorable";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const appFolder = path.join(dirname, "src/demos");
const graph = new ExplorableApp(appFolder);

export default graph;
