import { requestListener } from "@explorablegraph/explorable";
import http from "http";
import graph from "./graph.js";

const port = 5000;

http.createServer(requestListener(graph)).listen(port);
console.log(`Server running at http://localhost:${port}`);
