const { model, Schema } = require('mongoose');

const userSchema = new Schema({
	userName: String,
	password: String,
	team: Boolean,
	teamName: String,
	posts: [{ type: Schema.Types.ObjectId, ref: 'userPosts' }]
});

const User = model('User', userSchema);

module.exports = User;
