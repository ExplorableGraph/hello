import fetch from "node-fetch";

let people;

export default async function () {
  if (people === undefined) {
    // Obtain some fake people data from the Mockaroo service.
    const response = await fetch(
      "https://api.mockaroo.com/api/f63ddab0?count=10&key=a6d1f7c0"
    );
    const text = await response.text();
    people = text ? JSON.parse(String(text)) : [];

    // Add random photos from randomuser.me
    const maxPhotoIndex = 90; // rough empirical limit of randomuser.me photos
    const numbers = [...Array.from({ length: maxPhotoIndex }).keys()];
    shuffle(numbers);
    for (const person of people) {
      const { gender } = person;
      const group = gender === "Male" ? "men" : "women";
      const number = numbers.shift();
      person.photo = `https://randomuser.me/api/portraits/${group}/${number}.jpg`;
    }
  }
  return JSON.stringify(people, null, 2);
}

/*
 * Shuffle an array.
 *
 * Performs a Fisher-Yates shuffle. From http://sedition.com/perl/javascript-fy.html
 */
function shuffle(array) {
  var i = array.length;
  while (--i >= 0) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
