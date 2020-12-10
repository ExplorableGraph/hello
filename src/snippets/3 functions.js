import { ExplorableFunctions } from "@explorablegraph/core";

new ExplorableFunctions(
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
