const Comment = require('../models/comment');
const Post = require('../models/post');
const express = require('express');
const commentRouter = express.Router();

// INDUCES
// -- new goes bye bye
// -- edit goes bye bye
// CRUD
// Create
commentRouter.post('/api/comments', async (req, res)=> {
    try {
        const { name, message, postID } = req.body
        const newComment = await Comment.create({
            name,
            message
        });
        const foundPost = await Post.findById(postID)
        const postComments = foundPost.comments
        const updatedPost = await Post.findByIdAndUpdate(postID, {comments: [...postComments, newComment._id]})
        res
          .status(200)
          .json(newComment)
    } catch (error){
        res
          .status(400)
          .json(error)
    }
})
// Read 
/* Index */
commentRouter.get('/api/comments', async (req, res) => {
  try {
    const foundComments = await Comment.find({})
    res
      .status(200)
      .json(foundComments)
  } catch (error) {
    res
      .status(400)
      .json(error)
  }
})
/* Show */
commentRouter.get('/api/comments/:id', async (req, res) => {
    try {
        const foundComment = await Comment.findById(req.params.id)
        res
          .status(200)
          .json(foundComment)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})
// Destroy
commentRouter.delete('/api/comments/:id', async (req, res) => {
    try {
        const foundComment = await Comment.findByIdAndDelete(req.params.id)
        res
          .status(200)
          .json(foundComment)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})
// Update
commentRouter.put('/api/comments/:id', async (req, res) => {
    try {
        const foundComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true } )
        res
          .status(200)
          .json(foundComment)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})
module.exports = commentRouter;