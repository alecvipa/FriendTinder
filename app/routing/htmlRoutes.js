var express = require("express");
var path =require("path");

var app = express();

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = app;