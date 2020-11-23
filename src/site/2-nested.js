import { ExplorableSiteGraph, Graph } from "@explorablegraph/graph";

export default Graph.from({
  "index.html": `<a href="greetings/">Greetings</greetings>`,
  greetings: new ExplorableSiteGraph(
    "https://explorablegraph-hello.herokuapp.com"
  ),
});
