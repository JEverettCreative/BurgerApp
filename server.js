var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening at localhost: " + PORT)
});