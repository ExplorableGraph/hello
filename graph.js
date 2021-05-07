import { ExplorableApp } from "@explorablegraph/explorable/packages/web/exports.js";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const appFolder = path.join(dirname, "src/app");
const graph = new ExplorableApp(appFolder);

export default graph;
