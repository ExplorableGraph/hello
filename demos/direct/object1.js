const obj = {
  "goodbye.md": `# Goodbye\n`,
  "hello.md": `# Hello\n`,
};

for (const key of Object.keys(obj)) {
  const value = obj[key];
  console.log(`${key}: ${value}`);
}
