import { builtins, Compose } from "@explorablegraph/explorable";

const config = new Compose(
  {
    repeat(s) {
      return `${s}${s}`;
    },

    uppercase(s) {
      return s.toUpperCase();
    },
  },
  builtins
);

export default config;
