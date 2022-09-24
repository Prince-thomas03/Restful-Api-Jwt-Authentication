const errorHandler=require('express-error-handler')

module.exports = {

    //@desc getGoals
    //@route Get /api/goals
    //access private 
    setGoal: errorHandler(async(req, res) => {
        res.status(200).json({ message: 'get message' })

    }),


    //@desc postGoals
    //@route Get /api/goals
    //access private 
    postGoal: errorHandler(async(req, res) => {
        console.log('this  is req body ', req.body);

        if (!req.body.text) {
            res.status(400)
            throw new Error('please enter a valid text')
        }


        res.status(200).json({ message: 'post message' })
    }),


    //@desc updateGoals
    //@route Get /api/goals/id
    //access private 
    updateGoal: errorHandler(async(req, res) => {
        res.status(200).json({ message: `update message${req.params.id}` })
    }),

    //@desc deleteGoals
    //@route Get /api/goals/id
    //access private 
    deleteGoal: errorHandler(async(req, res) => {
        res.status(200).json({ message: `delete message ${req.params.id}` })
    }),


}