import { Explorable } from "@explorablegraph/core";

export default new Explorable({
  a: "Hello, a.",
  b: "Hello, b.",
  c: "Hello, c.",
  "index.html": `
    <ul>
      <li><a href="a">a</a></li>
      <li><a href="b">b</a></li>
      <li><a href="c">c</a></li>
    </ul>
  `,
});
