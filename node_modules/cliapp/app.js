var profile = require('./profile');
var users = process.argv.slice(2);
users.forEach(profile.get);


