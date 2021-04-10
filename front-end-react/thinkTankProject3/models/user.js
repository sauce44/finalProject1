const { model, Schema } = require('mongoose');

const userSchema = new Schema([{
	email: { type: String, unique: true, require: true },
	password: { type: String, select: false, require: true },
	job: String,
	team: Boolean,
	teamName: String,
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
}]);

const User = model('User', userSchema);

module.exports = User;
