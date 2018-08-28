    $(document).ready(function(){


    // SETUP VARIABLES
	// ==========================================================
	var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

	var searchTerm = "";
	var numResults = 5;

	// queryURLBase is the start of our API endpoint.
	var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
	  authKey + "&q=";

	// Counter to keep track of article numbers as they come in
	var articleCounter = 0;

	// FUNCTIONS
	// ==========================================================
	function runQuery(numArticles, queryURL) {

	  // The data then gets stored in the variable called: "NYTData"
	  $.ajax({
	    url: queryURL,
	    method: "GET"
	  }).done(function(NYTData) {

	    // Logging the URL so we have access to it for troubleshooting
	    console.log("------------------------------------");
	    console.log("URL: " + queryURL);
	    console.log("------------------------------------");

	    // Log the NYTData to console, where it will show up as an object
	    console.log(NYTData);
	    console.log("------------------------------------");

	    // Loop through and provide the correct number of articles
	    for (var i = 0; i < numArticles; i++) {
	    	var timestamp = new Date();

	      	timestamp.setDate(timestamp.getDate()-7);

	      	var newTimestamp = timestamp.toISOString();

	      	console.log(newTimestamp);
	      	if(newTimestamp < NYTData.response.docs[i].pub_date) {

	      // Add to the Article Counter (to make sure we show the right number)
	      articleCounter++;

	      // Create the HTML well (section) and add the article content for each
	      var wellSection = $("<div>");
	      wellSection.addClass("well");
	      wellSection.attr("id", "article-well-" + articleCounter);
	      $("#well-section").append(wellSection);

	      // Confirm that the specific JSON for the article isn't missing any details
	      // If the article has a headline include the headline in the HTML
	      if (NYTData.response.docs[i].headline !== "null") {

	        $("#article-well-" + articleCounter)
	          .append(
	            "<h3 class='articleHeadline'><span class='label label-primary'>" +
	            articleCounter + "</span><strong> " +
	            NYTData.response.docs[i].headline.main + "</strong></h3>"
	          );
	        // Log the first article's headline to console
	        console.log(NYTData.response.docs[i].headline.main);
	      }


	      $("#article-well-" + articleCounter)
	        .append(
	          "<p>" + NYTData.response.docs[i].snippet + "</p>"
	        );

	      // Then display the remaining fields in the HTML (Section Name, Date, URL)
	      $("#article-well-" + articleCounter)
	        .append("<a href='" + NYTData.response.docs[i].web_url + "'>" +
	          "Read it >>" + "</a>"
	        );

	      // Log the remaining fields to console as well
	      console.log(NYTData.response.docs[i].pub_date);
	      console.log(NYTData.response.docs[i].section_name);
	      console.log(NYTData.response.docs[i].web_url);
	    }
	}
	  });
	}

	  // Grabbing text the user typed into the search input
	  searchTerm = "nba";
	  var queryURL = queryURLBase + searchTerm;
	  // Number of results the user would like displayed
	  numResults = 10;

	  // Then we will pass the final queryURL and the number of results to
	  // include to the runQuery function
	  runQuery(numResults, queryURL);

  
		 // API key.
	    var APIKey = "924886c08f2548fc8c07fb2c9568acaf";

	    // URL we need to query the database
	    var queryURL = " https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=" + APIKey;

	    // AJAX call
	    $.ajax({
	      url: queryURL,
	      method: "GET"
	    }).done(function(response) {

	      // Log the queryURL
	      console.log(response);

          // Looping through each result item
          for (var i = 0; i < response.articles.length; i++) {

          	var nbaUrls = response.articles[i].url.indexOf("nba");

          	if (nbaUrls > -1) {

            // Creating and storing a div tag
            var nbaUrls = $("<div>");

            var moreNewsTitle = $("<p>").html("<h4 class='articleHeadline'><span class='label label-primary'>" + "<a href ='" + response.articles[i].url +"' target='_blank'>" + "</span></h4><h4><strong> "+ response.articles[i].title + "</strong></h4></a>" + "<p>" + response.articles[i].description + "</p>");

          	moreNewsTitle.addClass("moreNewsTitleStyle");

          	var imgURL = response.articles[i].urlToImage;

	         // Creating an element to hold the image
	        var image = $("<img>").attr("src", imgURL);

	        image.addClass("newsImage");

	        // Appending the image
	        nbaUrls.append(image);

            nbaUrls.append(moreNewsTitle);

            $("#more-news").prepend(nbaUrls);
          }
      		}

	    });

		 // API key.
	    var APIKey = "924886c08f2548fc8c07fb2c9568acaf";

	    // URL we need to query the database
	    var queryURL = "https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=" + APIKey;

	    // AJAX call
	    $.ajax({
	      url: queryURL,
	      method: "GET"
	    }).done(function(response) {

	      // Log the queryURL
	      console.log(response);

          // Looping through each result item
          for (var i = 0; i < response.articles.length; i++) {

          	var nbaUrls = response.articles[i].title.indexOf("NBA");

          	if (nbaUrls > -1) {

            // Creating and storing a div tag
            var nbaUrls = $("<div>");

            var moreNewsTitle = $("<p>").html("<h4 class='articleHeadline'><span class='label label-primary'>" + "<a href ='" + response.articles[i].url +"' target='_blank'>" + "</span></h4><h4><strong> "+ response.articles[i].title + "</strong></h4></a>" + "<p>" + response.articles[i].description + "</p>");

          	moreNewsTitle.addClass("moreNewsTitleStyle");

          	var imgURL = response.articles[i].urlToImage;

	         // Creating an element to hold the image
	        var image = $("<img>").attr("src", imgURL);

	        image.addClass("newsImage");

	        // Appending the image
	        nbaUrls.append(image);

            nbaUrls.append(moreNewsTitle);

            $("#more-news").prepend(nbaUrls);
          }
      		}

	    });

            });