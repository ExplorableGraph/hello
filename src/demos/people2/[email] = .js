export default async function () {
  const email = this.params?.email;
  if (email === undefined || email.endsWith(".html") || email.endsWith(".js")) {
    return undefined;
  }
  const people = await this.get("people.json");
  const person = people.find((person) => person.email === email);
  if (person === undefined) {
    return undefined;
  }
  const { name, country, job, photo } = person;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${name}</title>
  </head>
  <body>
    <img src="${photo}">
    <h1>${name}</h1>
    <p>
      ${job}<br>
      ${country}<br>
      ${email}
    </p>
  </body>
</html>`;
}
