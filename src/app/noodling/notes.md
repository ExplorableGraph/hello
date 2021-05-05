index.html - returns content
:wildcard - returns something that can be resolved to fallback content
index.html←.js - invokes function that can be resolved to fallback content
:wildcard←.js - invokes function to return wildcard resolved to fallback content
area←.js - invokes function to return graph for /area which handles the rest of the path

In functions:

- path is passed as arguments
- this references the graph that contained the file defining the function
- this.params references any bound wildcard values to get to that graph
