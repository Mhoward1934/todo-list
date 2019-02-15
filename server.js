const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.send("Hello World");
});

app.listen(PORT, function(){
    console.log("Server is running on port " + PORT);
});