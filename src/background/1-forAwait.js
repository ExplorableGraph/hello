async function* slowNumbers() {
  for (let i = 1; i <= 10; i++) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    yield i;
  }
}

for await (const n of slowNumbers()) {
  console.log(n);
}
