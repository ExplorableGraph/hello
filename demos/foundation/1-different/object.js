// An in-memory object
const obj = {
  Alice: "Hello, Alice! This is an object.",
  Bob: "Hello, Bob! This is an object.",
  Carol: "Hello, Carol! This is an object.",
};

// Display all the values of the object.
for (const key in obj) {
  const value = obj[key];
  console.log(`${key}: ${value}`);
}
