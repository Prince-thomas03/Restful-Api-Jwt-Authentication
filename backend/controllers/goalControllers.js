const T = require('../models/goalModel')
const asyncHandler = require('express-async-handler')




module.exports = {

    //@desc getGoals
    //@route Get /api/goals
    //access private 
    getGoal: asyncHandler(async (req, res) => {

        console.log();

        const goal = await T.find()
        console.log(goal);

        res.status(200).json(goal)

    }),


    //@desc postGoals
    //@route Get /api/goals
    //access private 
    postGoal: asyncHandler(async (req, res) => {
        console.log('this  is req body ', req.body);

        if (!req.body.text) {
            res.status(400)
            throw new Error('please enter a valid text')
        }

        const goals = await T.create({
            text: req.body.text
        })


        res.status(200).json(goals)
    }),


    //@desc updateGoals
    //@route Get /api/goals/id
    //access private 
    updateGoal: asyncHandler(async (req, res) => {
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

        const goal = await T.findById(req.params.id)

        if (!goal) {
            throw new Error('goal not found')
        }

        const updatedGoal= await T.findByIdAndUpdate(req.params.id,req.body,{new:true})


        res.status(200).json(updatedGoal)
    }),

    //@desc deleteGoals
    //@route Get /api/goals/id
    //access private 
    deleteGoal: asyncHandler(async (req, res) => {

    const goal= await T.findById(req.params.id)

    if(!goal){
        throw new Error('no data found')
    }

   await goal.remove()

        res.status(200).json({id:req.params.id})
    }),


}