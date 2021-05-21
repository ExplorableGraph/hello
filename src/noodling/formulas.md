| Formula                 | Effect                                            |
| ----------------------- | ------------------------------------------------- |
| foo                     | Value with the key `foo`                          |
| foo =                   | Value with the key `foo` (same as above)          |
| foo = .js               | Invoke default export to produce `foo`            |
| foo = fn()              | Invoke function `fn` to produce `foo` value       |
| = .json                 | Value taken as keys/values                        |
| = .js                   | Invoke default export to produce keys/values      |
| = fn()                  | Invoke function to produce keys/values            |
| index.html = index()    | Invoke `index` to produce index.html              |
| foo = (bar).js          | Invoke default export to transform `foo` to `bar` |
| foo = bar .js           | Same                                              |
| foo = .json             | Value is subgraph `foo`                           |
| foo = fn(bar)           | Invoke `fn` with value of `bar`, result is `foo`  |
| = markdown(\_.md)       | For each .md file, apply 'markdown'               |
| \_.html=markdown(\_.md) | As above, resulting keys end in .html             |
| = ../sibling            | Copy keys/values from graph sibling               |
| result = fn(\*)         | Pass all matches to `fn` to produce `result`      |

\_.html = handlebars(\_.handlebars, \_.json)
all.txt = cat(text/\*.txt)
all.json = compose(data/\*.json)
