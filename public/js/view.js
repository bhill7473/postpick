$(document).ready(function(){

//last name    
$("#lname-search-btn").on("click", function(event){

    event.preventDefault();

    $lname = $("#lname-search").val().trim();

    $.get("/data/player/" + $lname).then(function(data){

        console.log(data);
        $("#lname-search").val("");

        $("#results").empty();
        // if the data is not there, then return an error message
        if (!data) {
          $("#results").append("<h2> No Results </h2>");
        }
        else {
          // otherwise
          $("#results").append("<h2>Id: " + data[0].id + "</h2>");
          // append the  name
          $("#results").append("<h2>Name: " + data[0].lastname + "</h2>");
          // the position
          $("#results").append("<h3>Position: " + data[0].position + "</h3>");
          // and the fan points
          $("#results").append("<h3>Game Date: " + data[0].gameDate + "</h3>");
           //team
          $("#results").append("<h3>Team : " + data[0].team + "</h3>");
          // the date
          $("#results").append("<h3>Opponent: " + data[0].opponent + "</h3>");
          // and the fan points
          $("#results").append("<h3>Fan Points: " + data[0].fanPoints + "</h3>");
           //team points
          $("#results").append("<h3>Team Points : " + data[0].teamPoints + "</h3>");
          // opponent points
          $("#results").append("<h3>Opponent Points: " + data[0].opponentPoints + "</h3>");
          //notes
          $("#results").append("<h3>Notes: " + data[0].notes + "</h3>");
        }
})

});

//team search
$("#team-search-btn").on("click", function(event){

    event.preventDefault();

    $team = $("#team-search").val().trim();
    console.log($team);
    $.get("/data/team/" + $team).then(function(data){

        console.log(data);

        $("#team-search").val("");

        $("#results").empty();
        // if the data is not there, then return an error message
        if (!data) {
          $("#results").append("<h2> No Results </h2>");
        }
        else {
          // otherwise
          $("#results").append("<h2>Name: " + data[0].id + "</h2>");
          // append the  name
          $("#results").append("<h2>Name: " + data[0].lastname + "</h2>");
          // the position
          $("#results").append("<h3>Name : " + data[0].lastname + "</h3>");
          // the date
          $("#results").append("<h3>Position: " + data[0].position + "</h3>");
          // and the fan points
          $("#results").append("<h3>Game Date: " + data[0].gameDate + "</h3>");

          $("#results").append("<h3>Team : " + data[0].team + "</h3>");
          // the date
          $("#results").append("<h3>Opponent: " + data[0].opponent + "</h3>");
          // and the fan points
          $("#results").append("<h3>Fan Points: " + data[0].fanPoints + "</h3>");

          $("#results").append("<h3>Team Points : " + data[0].teamPoints + "</h3>");
          // the date
          $("#results").append("<h3>Opponent Points: " + data[0].opponentPoints + "</h3>");
          // and the fan points
          $("#results").append("<h3>Notes: " + data[0].notes + "</h3>");
        }
    })
})

//Position Search
$("#position-search-btn").on("click", function(event){

    event.preventDefault();

    $position = $("#position-search").val().trim();

    $.get("/data/position/" + $position).then(function(data){

        console.log(data);
        $("#position-search").val("");

        $("#results").empty();
        // if the data is not there, then return an error message
        if (!data) {
          $("#results").append("<h2> No Results </h2>");
        }
        else {
          // otherwise
          $("#results").append("<h2>Name: " + data[0].id + "</h2>");
          // append the  name
          $("#results").append("<h2>Name: " + data[0].lastname + "</h2>");
          // the position
          $("#results").append("<h3>Name : " + data[0].lastname + "</h3>");
          // the date
          $("#results").append("<h3>Position: " + data[0].position + "</h3>");
          // and the fan points
          $("#results").append("<h3>Game Date: " + data[0].gameDate + "</h3>");

          $("#results").append("<h3>Team : " + data[0].team + "</h3>");
          // the date
          $("#results").append("<h3>Opponent: " + data[0].opponent + "</h3>");
          // and the fan points
          $("#results").append("<h3>Fan Points: " + data[0].fanPoints + "</h3>");

          $("#results").append("<h3>Team Points : " + data[0].teamPoints + "</h3>");
          // the date
          $("#results").append("<h3>Opponent Points: " + data[0].opponentPoints + "</h3>");
          // and the fan points
          $("#results").append("<h3>Notes: " + data[0].notes + "</h3>");
        }
    })
})
//Last name with opponent search
$("#lnameOpp-search-btn").on("click", function(event){

    event.preventDefault();


    $lnameOpp2 = $("#lnameOpp2-search").val().trim();
    console.log($lnameOpp2)

    $.get("/data/lastnameOpponent/" + $lnameOpp2).then(function(data){

        console.log(data);
        $("#lnameOpp2-search").val("");

        $("#results").empty();
        // if the data is not there, then return an error message
        if (!data) {
          $("#results").append("<h2> No Results </h2>");
        }
        else {
          // otherwise
          $("#results").append("<h2>Name: " + data[0].id + "</h2>");
          // append the  name
          $("#results").append("<h2>Name: " + data[0].lastname + "</h2>");
          // the position
          $("#results").append("<h3>Name : " + data[0].lastname + "</h3>");
          // the date
          $("#results").append("<h3>Position: " + data[0].position + "</h3>");
          // and the fan points
          $("#results").append("<h3>Game Date: " + data[0].gameDate + "</h3>");

          $("#results").append("<h3>Team : " + data[0].team + "</h3>");
          // the date
          $("#results").append("<h3>Opponent: " + data[0].opponent + "</h3>");
          // and the fan points
          $("#results").append("<h3>Fan Points: " + data[0].fanPoints + "</h3>");

          $("#results").append("<h3>Team Points : " + data[0].teamPoints + "</h3>");
          // the date
          $("#results").append("<h3>Opponent Points: " + data[0].opponentPoints + "</h3>");
          // and the fan points
          $("#results").append("<h3>Notes: " + data[0].notes + "</h3>");
        }

    })
    
    
    })






});