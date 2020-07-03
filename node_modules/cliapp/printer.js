
// Print out message
function print (userName, badgeCount, points) {
	var message = userName + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
	console.log(message);
}

// Print out error message
function printerror(error) {
  console.log(error.message)
}

module.exports.print = print;
module.exports.printerror = printerror;