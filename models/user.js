var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	name: String,
	password: String,
	searching: Boolean,
	inGame: Boolean,
	token: String
});

/* BAD */
User.methods.verifyPassword = function(password) {
	return this.password === password;
};

module.exports = mongoose.model('User', User, 'users');