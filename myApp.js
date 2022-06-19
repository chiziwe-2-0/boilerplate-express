let express = require('express');
let app = express();



let absolutePath = __dirname + "/views/index.html"

let pathForMiddleware = __dirname + "/public"

// The first path argument is optional. If you don’t pass it, the middleware will be executed for all requests.
// ставим /public, потому что такой путь в HTML
app.use("/public", express.static(pathForMiddleware));


app.get("/",
    function(req, res) {
        res.sendFile(absolutePath)
});

app.get("/json",
function(req, res) {
    res.json({"message": "Hello json"})
});

console.log("Hello World")

 module.exports = app;
