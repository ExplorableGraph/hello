export default async function () {
  let html = "";
  for await (const key of this) {
    if (key !== "index.html" && !key.startsWith(":")) {
      const photo = await this.get(key, "photo.jpg");
      const img = photo ? `<img width="300px" src="${key}/photo.jpg">` : "";
      const link = `<p><a href="${key}/">${img}<br>${key}</a></p>\n`;
      html += link;
    }
  }
  return html;
}
