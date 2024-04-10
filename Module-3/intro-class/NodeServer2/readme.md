## Template / View Engines

> **EJS (Embedded JavaScript Engine)**
> Embedded JavaScript Engine (EJS) is a simple templating language that lets you generate HTML markup with plain JavaScript.

#### EXAMPLES:

**JS file 👇**

```js
app.get("/mumbai", (req, res) => {
  res.render("example", { cityName: "Mumbai" });
});

app.get("/bangalore", (req, res) => {
  res.render("example", { cityName: "Bangalore" });
});
```

```js
        app.get('/kunal', (req, res) => {
             res.render('user', {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avata¯r": "https://reqres.in/img/faces/8-image.jpg",
                isPremium: false,
            })¯
        })
```

```js
app.get("/ankit", (req, res) => {
  res.render("user", {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    isPremium: true,
  });
});
```

```js
app.get("/:cityName", (req, res) => {
  const { cityName } = req.params;
  console.log(cityName);
  console.log(cityName.length);

  // Get the first character of the city name and convert it to uppercase
  const firstChar = cityName.charAt(0).toUpperCase();

  // Get the rest of the string (everything except the first character)
  const restOfString = cityName.slice(1); // except the first character everything else is selected

  // Concatenate the capitalized first character with the rest of the string
  const result = firstChar + restOfString;

  res.send(result);
});
```

**EJS File 👇**

```ejs
<% hobbies.forEach((hobby) => { %>
<li><%= hobby %></li>
<% })) %>
```

## Request Parameters

The request parameters can be accessed in the route handler functions using `req.params`. For example, if you have a route defined as `/user/:id`, you can access the `id` parameter in the route handler function using `req.params.id`.

The `req.params` object contains key-value pairs of the route parameters. The keys are the parameter names and the values are the parameter values.

For example, if you have a route defined as `/user/:id`, and a request is made to `/user/123`, the `req.params` object will be:
