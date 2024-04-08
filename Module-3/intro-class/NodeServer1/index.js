// Importing the express library
const express = require('express');

// Creating an instance of the express application
const app = express();

// importing body-parser
const bodyParser = require('body-parser');

// Parse URL-encoded bodies (as sent by HTML forms)
// app.use(bodyParser.urlencoded({ extended: true })); 
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Extended: true allows nested objects

// Defining the port number on which the server will run
const port = 8000;

// Defining an array of users
const users = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
]

const isLoggedIn = (req, res, next) => {
    let isUserLoggedIn = false;

    if (!isUserLoggedIn) {
        res.send('You are not logged in! Please login first.');
        return;
    }

    next();
}

app.use(isLoggedIn);

// Defining a route for the root URL '/'
app.get('/', (req, res) => {
    // Sending a response when the root URL is accessed
    res.send(`Our server is running on port ${port}\n Our first Node Server\n`);
})

// Defining a route for the '/about' URL
app.get('/about', (req, res) => {
    // Sending a response with the message "Hello from about page"
    res.sendFile(__dirname + "/about.html");
})

// Sending a download of the 'about.html' file
app.get('/download-about-page', (req, res) => {
    // sending file for download
    res.download(__dirname + "/about.html");
})

// Redirecting to '/about' page
app.get('/redirect-to-about-page', (req, res) => {
    // redirecting to another page
    res.redirect('/about');
})

// Sending a contact page
app.get('/contact', (req, res) => {
    // sending file as response
    res.sendFile(__dirname + "/contact.html");
})

// Defining a route for the '/users' URL
app.get('/users', (req, res) => {
    // Sending a response with the array of users
    res.send(users);
})

// Defining a route for the '/users/even' URL
app.get('/users/even', (req, res) => {
    // Sending a response with the array of users with even id
    res.send(users.filter(user => user.id % 2 == 0));
})

// Defining a route for the '/users/short-firstname' URL
app.get('/users/short-firstname', (req, res) => {
    // Sending a response with the array of users with short first name
    res.send(users.filter(user => user.first_name.length <= 5));
})

// Defining a route for the '/registration-form' URL
// This route sends the registration form HTML file as response
app.get('/registration-form', (req, res) => {
    res.sendFile(__dirname + "/register.html");
})

// Defining a route for the '/process-data' URL
// This route processes the data from the registration form and sends a success message
app.post('/process-data', (req, res) => {
    // Log a 'Hello' message to the console
    console.log(req.body);
    // Send a success message as response
    res.send(`Registration Successful for ${req.body.firstName} ${req.body.lastName}`);
})

// Starting the server and listening on the defined port
app.listen(port, () => {
    // Logging a message when the server starts running
    console.log(`The server is running on port ${port}`);
})



/********************************************************************************************************************

// NODE 

// Importing the HTTP module to create a server
const { createServer } = require('node:http');

// Creating a new HTTP server
const server = createServer((req, res) => {
    // Setting the response status code to 200 (OK)
    res.statusCode = 200;
    
    // Sending the response with the message 'Our first Node Server\n'
    res.end('Our first Node Server\n');
});

// Starting the server and listening on port 3000
server.listen(3000, () => {
    // Logging a message when the server starts running
    console.log('Server running on port 3000');
});

// FRAMEWORKS:
// Express.js
// Fastify.js   
// Hapi.js

// Middleware in Express.js
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. The next function is a function that allows the application to move on to the next middleware function.

// HTTP Methods in Express.js
// GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
// 
// 1. GET - Fetch data
// 2. POST - Create data
// 3. PUT - Update data
// 4. DELETE - Delete data
// 5. PATCH - Update specific data
// 6. OPTIONS - Get the options
// 7. HEAD - Get headers of the requested resource

********************************************************************************************************************/