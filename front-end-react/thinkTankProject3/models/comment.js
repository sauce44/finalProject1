const { model, Schema } = require('mongoose')


const commentSchema = new Schema([{
    name: String,
    message: String,
}])

const Comment = model('Comment', commentSchema);

module.exports = Comment;