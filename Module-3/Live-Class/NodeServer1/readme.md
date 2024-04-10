### NODE

```js
// Importing the HTTP module to create a server
const { createServer } = require("node:http");

// Creating a new HTTP server
const server = createServer((req, res) => {
  // Setting the response status code to 200 (OK)
  res.statusCode = 200;

  // Sending the response with the message 'Our first Node Server\n'
  res.end("Our first Node Server\n");
});

// Starting the server and listening on port 3000
server.listen(3000, () => {
  // Logging a message when the server starts running
  console.log("Server running on port 3000");
});
```

> **FRAMEWORKS:**
>
> - Express.js
> - Fastify.js
> - Hapi.js

> **Middleware in Express.js**
> Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. The next function is a function that allows the application to move on to the next middleware function.

> **HTTP Methods in Express.js** > _GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD_
>
> 1.  GET - Fetch data
> 2.  POST - Create data
> 3.  PUT - Update data
> 4.  DELETE - Delete data
> 5.  PATCH - Update specific data
> 6.  OPTIONS - Get the options
> 7.  HEAD - Get headers of the requested resource
