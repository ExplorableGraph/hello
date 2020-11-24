import { ExplorableSiteGraph } from "@explorablegraph/graph";

export default new AsyncExplorableObject({
  "index.html": `<a href="greetings">Greetings</greetings>`,
  greetings: new ExplorableSiteGraph("http://localhost:5001/"),
});
