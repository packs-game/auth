var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	name: String,
	password: String,
	searching: Boolean,
	inGame: Boolean,
	token: String,
	superAdmin: Boolean,
	lastLoginRewardTime: {type: Date, default: Date.now}
});

/* BAD */
User.methods.verifyPassword = function(password) {
	return this.password === password;
};

User.methods.updateLastLoginRewardTime = function() {
	this.lastLoginRewardTime = Date.now();
};

module.exports = mongoose.model('User', User, 'users');