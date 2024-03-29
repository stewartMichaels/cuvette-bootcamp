/*

- Node.js is an open-source, cross-platform JS runtime environment.

- Browser: JS engine -> provides JS run-time environment.
    - Browser were able to execute JS code using this JS engine.
    - JS engine provided a JS execution context (environment in which JS code is executed).
Examples:
- Chrome: V8 Engine.
- Firefox: SpiderMonkey.
- Safari: JavaScriptCore.
- Edge: Chakra.

    Before 2009: JS executed inside browsers (V8 Engine).
    After 2009: Ryan Dahl's (put the same V8 Engine inside a JS runtime) -> Node.js was created.

- Node.js = Runtime Environment + JavaScript Library.
- Asynchronous and Event Driven.
- Single-threaded but Highly Scalable.

Functionality: APIs, File Systems, etc.

NPM: Node Package Manager - Manage Dependencies.

Client Server: https://madooei.github.io/cs421_sp20_homepage/assets/client-server-1.png

*/

const sum = (a, b) => {
    console.log(a + b);
}

// instead export this in a file
// sum(9, 8);
// sum(123, 456);

module.exports = sum; // exports the function