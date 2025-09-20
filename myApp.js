let express = require('express');
let app = express();

const say = "Hello World";
console.log(say);
app.get("/", (req, res) => {
    res.send("Hello World");
});


































 module.exports = app;
