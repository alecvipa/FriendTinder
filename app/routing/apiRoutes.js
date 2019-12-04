
var express = require("express");
var path =require("path");

var app = express();

var currentfriends = require("../data/friends.js");
// var waitListData = require("../data/waitinglistData");

app.get("/getfriends", function(req, res) {
    res.json(currentfriends);
  });
app.post("/newfriend",function(req,res){

    currentfriends.push(req.body);
    res.json(true);


});
app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
});

module.exports = app
  
  
    // app.post("/api/friend", function(req, res) {
    //   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    //   // It will do this by sending out the value "true" have a table
    //   // req.body is available since we're using the body parsing middleware

    //   currentfriends.push(req.body);
    //     res.json(true);
      
    // });
  
    // // ---------------------------------------------------------------------------
    // // I added this below code so you could clear out the table while working with the functionality.
    // // Don"t worry about it!
  
    // app.post("/api/clear", function(req, res) {
    //   // Empty out the arrays of data
    //   friends.length = 0;
    // //   waitListData.length = 0;
  
    //   res.json({ ok: true });
    // });
  