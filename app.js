import { ExplorableApp } from "@explorablegraph/explorable/packages/web/exports.js";
import { requestListener } from "@explorablegraph/explorable/packages/webserver/exports.js";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const port = 5000;

const dirname = path.dirname(fileURLToPath(import.meta.url));
const appFolder = path.join(dirname, "src/app");
const graph = new ExplorableApp(appFolder);

http.createServer(requestListener(graph)).listen(port);
console.log(`Server running at http://localhost:${port}`);
