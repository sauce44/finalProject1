require('dotenv').config();
const User = require('../models/user');
const Team = require('../models/team');
const { hash } = require('./authController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET = process.env.SECRET;
const express = require('express');
const userRouter = express.Router();
// register
userRouter.post('/register', async (req,res) => {
    let { Email, Password } = req.body;
    Password = hash(Password);
    Password = bcrypt.hashSync(Password, bcrypt.genSaltSync(10));
    try {
        const newUser = await User.create({ Email, Password });
        const token = jwt.sign({email: newUser.Email, id: newUser._id}, SECRET);
        res.json({
            token,
            authorized: true, 
            username: newUser.Email
        })
    } catch (error) {
        console.error(error)
        res
            .status(400)
            .json(error)
    }
})

// login
userRouter.post('/login', async(req, res) => {
    let { Email, Password } = req.body;
    Password = hash(Password);

    try {
        const userQuery = User.findOne({Email}).select('Password Email')
        const foundUser = await  userQuery.exec();
        if(bcrypt.compareSync(Password, foundUser.Password)){
            const token = jwt.sign(
                {
                Email: foundUser.Email,
                id: foundUser._id
                },
                SECRET
            )
            res
                .status(200)
                .json({
                    token,
                    authorized: true,
                    username: foundUser.Email
                })
        } else {
            res
            .send(400)
            .json({
                message: 'User Entered Incorrect Password or User Doesn\'t Exist'
            })
        }
    } catch (error) {
        console.error(error)
        res
            .status(400)
            .json(error)
    }
})

//
// INDUCES
// -- new goes bye bye
// -- edit goes bye bye
// CRUD
// Create
userRouter.post('/api/users', async (req, res)=> {
    try {
        const { userName, password, teamID } = req.body
        const newUser = await User.create({
            userName,
            password
        });
        const foundTeam = await Team.findById(teamID)
        const teamUsers = foundTeam.users
        const updatedTeam = await Team.findByIdAndUpdate(teamID, {users: [...teamUsers, newUser._id]})
        res
          .status(200)
          .json(newUser)
    } catch (error){
        res
          .status(400)
          .json(error)
    }
})
// Read 
/* Index */
userRouter.get('/api/users', async (req, res) => {
  try {
    const foundUsers = await User.find({})
    res
      .status(200)
      .json(foundUsers)
  } catch (error) {
    res
      .status(400)
      .json(error)
  }
})
/* Show */
userRouter.get('/api/users/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id)
        await foundUser.execPopulate('posts')
        res
          .status(200)
          .json(foundUser)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})
// Destroy
userRouter.delete('/api/users/:id', async (req, res) => {
    try {
        const foundUser = await User.findByIdAndDelete(req.params.id)
        res
          .status(200)
          .json(foundUser)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})
// Update
userRouter.put('/api/users/:id', async (req, res) => {
    try {
        const foundUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true } )
        res
          .status(200)
          .json(foundUser)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})



module.exports = userRouter