import { Files } from "@explorablegraph/node";
import path from "path";
import { fileURLToPath } from "url";
const dirname = path.dirname(fileURLToPath(import.meta.url));

new Files(path.join(dirname, "static"));
