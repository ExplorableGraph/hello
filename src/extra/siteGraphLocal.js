import { ExplorableSiteGraph } from "@explorablegraph/graph";

export default Graph.from({
  "index.html": `<a href="greetings">Greetings</greetings>`,
  greetings: new ExplorableSiteGraph("http://localhost:5001/"),
});
