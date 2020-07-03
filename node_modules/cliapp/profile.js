var https = require('https');
var printer = require('./printer');

function get(username) {
  // Connect to API URL 
  var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
    
    var body = "";

    // Read stream of data
    response.on('data', function(chunk) {
      body += chunk;
    });

    // Once stream end
    response.on('end', function() {
      if (response.statusCode === 200) {
        // Error Handling
        try {
          // Convert to JSON object
          var profile = JSON.parse(body);
          //printMessage(username, profile.badges.length, profile.points.JavaScript);
          printer.print(username, profile.badges.length, profile.points.JavaScript);

        } catch(error) {
          // printErrorMessage(error);
          printer.printerror(error);
        }
      } else {
        // printErrorMessage({message: "There was an error occured " + response.statusCode});
        printer.printerror({message: "There was an error occured " + response.statusCode});
      }
    });
  });

  // Connection error
  // request.on('error', printErrorMessage);
  request.on('error', printer.printerror);

}

module.exports.get = get;