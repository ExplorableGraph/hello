import { builtins, Compose } from "@explorablegraph/explorable";
import Handlebars from "handlebars";

const config = new Compose(
  {
    hb(template) {
      return Handlebars.compile(String(template));
    },
  },
  builtins
);

export default config;
