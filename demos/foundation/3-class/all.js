import { ExplorableObject } from "@explorablegraph/explorable";
import folder from "./folder.js";
import fn from "./function.js";
import object from "./object.js";
import site from "./site.js";

// Compose all those graphs together
export default new ExplorableObject({
  object,
  folder,
  fn,
  site,
});
