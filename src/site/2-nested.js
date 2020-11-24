import { ExplorableSiteGraph } from "@explorablegraph/graph";

export default new AsyncExplorableObject({
  "index.html": `<a href="greetings/">Greetings</greetings>`,
  greetings: new ExplorableSiteGraph(
    "https://explorablegraph-hello.herokuapp.com"
  ),
});
