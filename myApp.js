let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');
// Challenge 10
app.use(bodyParser.urlencoded({ extended: false }));


// challenge 6
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.path} - ${req.ip}`);
//     next();
// });

//challenge 7
// app.get("/user",function(req,res, next){
//     req.user = getTheUserSync(); // Hypothetical synchronous operation
//     next();
// }, function(req,res){
//     res.send(req.user);
// });
//  
// app.get("/now", (req, res, next) => {
//     req.time = new Date().toString();
//     next();
// }, (req,res) => {
//     res.json({ time: req.time });
// });

// Challenge 8
app.get("/:word/echo", (req, res) => {
    const { word } = req.params;
    res.json({ echo: word });
});

// Challenge 9
app.get("/name", (req, res) => {
    const firstName = req.query.first;
    const lastName = req.query.last;
    res.json({ name: `${firstName} ${lastName}` });
}).post("/name", (req, res) => {
    const firstName = req.body.first;
    const lastName = req.body.last;
    res.json({ name: `${firstName} ${lastName}` });
});
// challenge 11



// challenge 1
// const say = "Hello Express";
// console.log(say);
// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

// challenge 2
const absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
    res.sendFile(absolutePath);
});

// challenge 3

// app.use(this.path, middlewareFunction);
app.use("/public", express.static(__dirname + "/public"));

// challenge 4
app.get("/json", (req, res) => {
    // challenge 5
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ message: "HELLO JSON" });
    } else {
        res.json({ message: "Hello json" });
    }
});






















 module.exports = app;
