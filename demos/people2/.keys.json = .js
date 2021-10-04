export default async function () {
  const people = await this.get("people.json");
  const emails = people.map((person) => person.email);
  return emails;
}
