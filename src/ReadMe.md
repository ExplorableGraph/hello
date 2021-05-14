## ExplorableGraph class

Base class for explorable graphs.

```js
const graph = new ExplorableGraph({
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
});

await graph.keys(); // ["a", "b", "c"]
await graph.get("a"); // 1
await graph.get("c", "d"); // 3
```

## VirtualKeysMixin

If graph defines a key called `.keys.json`, then its value will provide additional keys for the graph.

```js
const graph = new VirtualKeysMixin(ExplorableGraph)({
  ".keys.json": ["a", "b", "c"],
});

await graph.keys(); // ["a", "b", "c", ".keys.json"]
```

## VirtualValuesMixin

If the graph is asked for a key `foo` that does not exist, but the graph _does_ have a key called `foo←.js`, then the latter will be loaded as a JavaScript module and its default export can be invoked to obtain `foo`.

Suppose the `example` folder contains a JavaScript file called `dynamic←.js` that contains

```js
export default function () {
  return "Hello, world";
}
```

Then:

```js
const graph = new VirtualValuesMixin(Files)(example);
await graph.get("dynamic")(); // "Hello, world"
```

## WildcardKeysMixin

Graph keys that start with a colon (`:`) are considered to be wildcards. If the graph is asked for a key that does not exist, the first wildcard value will be returned.

```js
const graph = new WildcardKeysMixin(ExplorableGraph)({
  a: 1,
  b: 2,
  ":default": 0,
});

await graph.get("a"); // 1
await graph.get("c"); // 0
```

If the wildcard is a function, it will be invoked. Inside the function, `this` refers the graph that contains the function, and `this.params` refers to the wildcard matches that apply at that point.

```js
const graph = new WildcardKeysMixin(ExplorableGraph)({
  ":name": function () {
    return `Hello, ${this.params.name}`;
  },
});

await graph.get("Alice"); // "Hello, Alice"
await graph.get("Bob"); // "Hello, Bob"
```

If the wildcard is a subgraph, its contents will appear as virtual members of any other subgraphs.

```js
const graph = new WildcardKeysMixin(ExplorableGraph)({
  ":more": {
    bar: "Hello bar",
  },
  stuff: {
    foo: "Hello foo",
  },
});

const stuff = await graph.get("stuff");
await stuff.keys(); // ["foo", "bar"]
await stuff.get("foo"); // "Hello foo"
await stuff.get("bar"); // "Hello bar"
```
