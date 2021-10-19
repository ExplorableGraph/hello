// An in-memory object
const obj = {
  Alice: "Hello, Alice.",
  Bob: "Hello, Bob.",
  Carol: "Hello, Carol.",
};

// Display all the values of the object.
for (const key in obj) {
  const value = obj[key];
  console.log(value);
}
