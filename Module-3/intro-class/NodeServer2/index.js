const express = require('express');

let ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

const port = 3000;

const USERS = [
    {
        "id": 7,
        "username": "michael",
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "username": "lindsay",
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "username": "tobais",
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "username": "byron",
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "username": "george",
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "username": "rachel",
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
]

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/404', (req, res) => {
    res.sendFile(__dirname + '/404.html')
})

app.get('/:username', (req, res) => {

    const { username } = req.params;

    const userDetails = USERS.find(user => user.username === username)

    if (userDetails) {
        res.render('user', userDetails);
    }
    else {
        res.redirect('/404')
    }
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})


