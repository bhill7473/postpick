var db = require("../models");

module.exports = function(app) {

//Get routes for getting post data    
//Last Name
app.get("/data/player/:lastname", function(req,res){
      
    db.Post.findAll({
        where:{
           lastname: req.params.lastname
        }
    })
    .then(function(dbPlayer) {
    res.json(dbPlayer);
    });

});

//Team
app.get("/data/team/:team", function(req,res){
      
    db.Post.findAll({
        where:{
           team: req.params.team
        }
    })
    .then(function(dbTeam) {
    res.json(dbTeam);
    });

});
    
//Position
app.get("/data/position/:position", function(req,res){
      
    db.Post.findAll({
        where:{
           position: req.params.position
        }
    })
    .then(function(dbPosition) {
    res.json(dbPosition);
    });

});

//Last name with opponent
app.get("/data/lastnameOpponent/:opponent", function(req,res){

    db.Post.findAll({
        where:{
            opponent: req.params.opponent
        }
    }).then(function(dblnameOpp){
        res.json(dblnameOpp);
    })
})

//Post routes for posting data

app.post("/data/newPost", function(req,res){
    
    console.log(req.body);
    db.Post.create({
       lastname: req.body.lastname,
       position: req.body.position,
       gameDate: req.body.gameDate,
       fanPoints: req.body.fanPoints,
       minutesPlayed: req.body.minutesPlayed,
       //injured: req.body.injured,
       //wonGame: req.body.wonGame,
       teamPoints: req.body.teamPoints,
       opponentPoints: req.body.opponentPoints,
       team: req.body.team,
       opponent: req.body.opponent,
       notes: req.body.notes
    })
    .then(function(dbNewPost){
        res.json(dbNewPost);
    })

    });



};