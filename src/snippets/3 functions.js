import { ExplorableFunctions } from "@explorablegraph/core";
import { DefaultPages } from "@explorablegraph/web";

export default new ExplorableFunctions(
  {
    english: (x) =>
      !DefaultPages.isDefaultPage(x) ? `Hello, ${x}.` : undefined,
    french: (x) =>
      !DefaultPages.isDefaultPage(x) ? `Bonjour, ${x}.` : undefined,
    spanish: (x) =>
      !DefaultPages.isDefaultPage(x) ? `Hola, ${x}.` : undefined,
  },
  ["a", "b", "c"]
);
