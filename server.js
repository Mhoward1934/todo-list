const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get("/", function(req, res){
    res.render('index');
});

app.listen(PORT, function(){
    console.log("Server is running on port " + PORT);
});