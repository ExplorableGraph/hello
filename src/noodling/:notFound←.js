export default function (...keys) {
  const path = [this.params?.notFound, ...keys];
  return `
    <h1>Not found</h1>
    <p>
      The page ${path.join("/")} could not be found.
    </p>
  `;
}
