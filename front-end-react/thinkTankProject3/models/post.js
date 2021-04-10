const { model, Schema } = require('mongoose')


const postSchema = new Schema([{
    title: String,
    body: String,
    comments: [{ type : Schema.Types.ObjectId, ref: 'Comment' }]
}])

const Post = model('Post', postSchema);

module.exports = Post;