// const User = require('../models/user');
// const Team = require('../models/team');
// const express = require('express');
// const userRouter = express.Router();

// // INDUCES
// // -- new goes bye bye
// // -- edit goes bye bye
// // CRUD
// // Create
// userRouter.post('/', async (req, res)=> {
//     try {
//         const { userName, password, teamID } = req.body
//         const newUser = await User.create({
//             userName,
//             password
//         });
//         const foundTeam = await Team.findById(userID)
//         const teamUsers = foundTeam.users
//         const updatedTeam = await Team.findByIdAndUpdate(teamID, {users: [...teamUsers, newUser._id]})
//         res
//           .status(200)
//           .json(newUser)
//     } catch (error){
//         res
//           .status(400)
//           .json(error)
//     }
// })
// // Read 
// /* Index */
// userRouter.get('/', async (req, res) => {
//   try {
//     const foundUsers = await User.find({})
//     res
//       .status(200)
//       .json(foundUsers)
//   } catch (error) {
//     res
//       .status(400)
//       .json(error)
//   }
// })
// /* Show */
// userRouter.get('/:id', async (req, res) => {
//     try {
//         const foundUser = await User.findById(req.params.id)
//         await foundUser.execPopulate('posts')
//         res
//           .status(200)
//           .json(foundUser)
//     } catch (error) {
//         res 
//           .status(400)
//           .json(error)
//     }
// })
// // Destroy
// userRouter.delete('/:id', async (req, res) => {
//     try {
//         const foundUser = await User.findByIdAndDelete(req.params.id)
//         res
//           .status(200)
//           .json(foundUser)
//     } catch (error) {
//         res 
//           .status(400)
//           .json(error)
//     }
// })
// // Update
// userRouter.put('/:id', async (req, res) => {
//     try {
//         const foundUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true } )
//         res
//           .status(200)
//           .json(foundUser)
//     } catch (error) {
//         res 
//           .status(400)
//           .json(error)
//     }
// })
// module.exports = userRouter;