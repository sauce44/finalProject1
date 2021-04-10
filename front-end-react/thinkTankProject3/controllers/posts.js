const Post = require('../models/post');
const User = require('../models/user')
const express = require('express');
const postRouter = express.Router();
// INDUCES
// -- new goes bye bye
// -- edit goes bye bye
// CRUD
// Create
postRouter.post('/', async (req, res)=> {
    try {
        const { title, body, userID } = req.body
        const newPost = await Post.create({
          title,
          body,
        });
        const foundUser = await User.findById(userID)
        const userPosts = foundUser.posts
        const updatedUser = await User.findByIdAndUpdate(userID, {posts: [...userPosts, newPost._id]})
        res
          .status(200)
          .json(newPost)
    } catch (error){
        res
          .status(400)
          .json(error)
    }
})
// Read 
/* Index */
postRouter.get('/', async (req, res) => {
  try {
    const foundPosts = await Post.find({})
    res
      .status(200)
      .json(foundPosts)
  } catch (error) {
    res
      .status(400)
      .json(error)
  }
})
/* Show */
postRouter.get('/:id', async (req, res) => {
    try {
        const foundPost = await Post.findById(req.params.id)
        await foundPost.execPopulate('comments')
        res
          .status(200)
          .json(foundPost)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})
// Destroy
postRouter.delete('/:id', async (req, res) => {
    try {
        const foundPost = await Post.findByIdAndDelete(req.params.id)
        res
          .status(200)
          .json(foundPost)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})
// Update
postRouter.put('/:id', async (req, res) => {
    try {
        const foundPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true } )
        res
          .status(200)
          .json(foundPost)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})

module.exports = postRouter;