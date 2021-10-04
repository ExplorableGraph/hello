import Handlebars from "handlebars";

export default async function () {
  const template = String(await this.get("index.handlebars"));
  const compiled = Handlebars.compile(template);
  const data = await this.get("index.json");
  return compiled(data);
}
