const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/me', (req, res) => {
    res.send('Hello me!');
})

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is up and running on port: ${port}`);
    }
})