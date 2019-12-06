var currentfriends = require("../data/friends");


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(currentfriends);
  });


  app.post("/api/friends", function(req, res) {
    console.log(parseInt(req.body.SurveyArr[0]));
    console.log(req.body.SurveyArr[0]);
   

    currentfriends.push(req.body);
      res.json(true);
  });



  app.post("/api/clear", function(req, res) {
    currentfriends.length = 0;


    res.json({ ok: true });
  });
};
