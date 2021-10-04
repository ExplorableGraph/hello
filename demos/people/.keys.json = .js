import getPeople from "./.getPeople.js";

export default async function () {
  const people = await getPeople();
  const emails = people.map((person) => person.email);
  return emails;
}
