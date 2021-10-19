import obj from "./object.js";

// Render obj as XML.
let xml = "";
for await (const key of obj) {
  const value = await obj.get(key);
  xml += `  <${key}>${value}</${key}>\n`;
}
xml = `<graph>\n${xml}</graph>`;

console.log(xml);
