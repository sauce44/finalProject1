const Team = require('../models/team');
const express = require('express');
const teamRouter = express.Router();
// INDUCES
// -- new goes bye bye
// -- edit goes bye bye
// CRUD
// Create
teamRouter.post('/api/teams', async (req, res)=> {
    try {
        const newTeam = await Team.create(req.body);
        res
          .status(200)
          .json(newTeam)
    } catch (error){
        res
          .status(400)
          .json(error)
    }
})
// Read 
/* Index */
teamRouter.get('/api/teams', async (req, res) => {
  try {
    const foundTeams = await Team.find({})
    res
      .status(200)
      .json(foundTeams)
  } catch (error) {
    res
      .status(400)
      .json(error)
  }
})
/* Show */
teamRouter.get('/api/teams/:id', async (req, res) => {
    try {
        const foundTeam = await Team.findById(req.params.id)
        await foundTeam.execPopulate('users')
        res
          .status(200)
          .json(foundTeam)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})
// Destroy
teamRouter.delete('/api/teams/:id', async (req, res) => {
    try {
        const foundTeam = await Team.findByIdAndDelete(req.params.id)
        res
          .status(200)
          .json(foundTeam)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})
// Update
teamRouter.put('/api/teams/:id', async (req, res) => {
    try {
        const foundTeam = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true } )
        res
          .status(200)
          .json(foundTeam)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})

module.exports = teamRouter;