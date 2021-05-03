import { ExplorableApp } from "@explorablegraph/web";
import { requestListener } from "@explorablegraph/webserver";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Files } from "../explorable/packages/eg/node_modules/@explorablegraph/node/exports.js";

const port = 5000;

const dirname = path.dirname(fileURLToPath(import.meta.url));
const appDirname = path.join(dirname, "src/app");
const files = new Files(appDirname);
const graph = new ExplorableApp(files);

http.createServer(requestListener(graph)).listen(port);
console.log(`Server running at http://localhost:${port}`);
