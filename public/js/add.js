$(document).ready(function(){

    $("#add-btn").on("click", function(event){

        event.preventDefault();

        $lastname = $("#lname").val().trim();
        $position = $("#position").val().trim();
        $gameDate = $("#gamedate").val().trim();
        $fanPoints = $("#fanpoints").val().trim();
        $minutesPlayed = $("#minsplayed").val().trim();
        //$injured = $("#injured").val().trim();
        //$wonGame = $("#wongame").val().trim();
        $teamPoints = $("#teamactpoints").val();
        $opponentPoints = $("#oppactpoints").val();
        $team = $("#team").val().trim();
        $opponent = $("#opponent").val().trim();
        $notes = $("#notes").val().trim();

        if ($lastname == "" ||  $position == "" || $gameDate == "" ||  $fanPoints == "" || $minutesPlayed == "" || $teamPoints == " " ||
          $opponentPoints == "" || $team == "" ||  $opponent == "") {
            alert("All fields must be filled out");
            return false;
        }

        var newPost = {
            lastname: $lastname,
            position: $position,
            gameDate: $gameDate,
            fanPoints: $fanPoints,
            minutesPlayed: $minutesPlayed,
           // injured: $injured,
           // wonGame: $wonGame,
            teamPoints: $teamPoints,
            opponentPoints: $opponentPoints,
            team: $team,
            opponent: $opponent,
            notes: $notes

        }

        $("#lname").val("");
        $("#position").val("");
        $("#gamedate").val("");
        $("#fanpoints").val("");
        $("#minsplayed").val("");
        //$injured = $("#injured").val().trim();
        //$wonGame = $("#wongame").val().trim();
        $("#teamactpoints").val("");
        $("#oppactpoints").val("");
        $("#team").val();
        $("#opponent").val("");
        $("#notes").val("");
        
        console.log(newPost);

        $.post("/data/newPost", newPost)
        
        .then(function(data) {
            
            console.log(data);
            // tell the user we're adding a character with an alert window
            alert("Successfully Added!");
          });

        


    })





});