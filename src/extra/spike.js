import graph from "./7.js";

const obj = await graph.resolve();
const text = JSON.stringify(obj, null, 2);
console.log(text);
