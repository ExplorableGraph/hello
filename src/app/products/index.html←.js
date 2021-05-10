export default async function () {
  let html = "";
  for await (const key of this) {
    if (key !== "index.html" && !key.startsWith(":")) {
      const title = key[0].toUpperCase() + key.slice(1);
      const photo = await this.get(key, "photo.jpg");
      const photoString = photo?.toString("base64");
      const img = photoString
        ? `<img width="300px" src="data:image/jpg;base64,${photoString}">`
        : "";
      const link = `<p><a href="${key}/">${img}<br>${title}</a></p>`;
      html += link;
    }
  }
  return html;
}
