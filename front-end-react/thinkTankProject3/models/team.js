const { model, Schema } = require('mongoose');

const teamSchema = new Schema([
	{
		team: Boolean,
		teamName: String,
		users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
	}
]);

const Team = model('Team', teamSchema);

module.exports = Team;
