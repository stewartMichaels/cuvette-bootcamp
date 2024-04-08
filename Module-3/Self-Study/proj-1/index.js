const express = require('express');
const app = express();
const port = 8000;

const customMiddleware = (req, res, next) => {
    req.customInfo = 20;
    console.log('Custom middleware');
    next();
}

app.use(express.static('./public'));

// app.use(customMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// app.get('/me', (req, res) => {
//     res.send('Hello me!');
// })

app.get('/me', (req, res) => {
    console.log(req.customInfo);
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is up and running on port: ${port}`);
    }
})