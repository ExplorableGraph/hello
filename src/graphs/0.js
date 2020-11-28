import { Explorable, get } from "@explorablegraph/core";

const explorable = Explorable({
  a: "Hello, a.",
  b: "Hello, b.",
  c: "Hello, c.",
});

for (const key of explorable) {
  console.log(explorable[get](key));
}
