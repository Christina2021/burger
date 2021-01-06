//Required packages
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

//Defining port
let PORT = process.env.PORT || 3000;

//Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Public assets
app.use(express.static("public"));

//Set up Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Server have access to routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Listening for server
app.listen(PORT, function() {
    console.log("App is listening on localhost:" + PORT);
  });