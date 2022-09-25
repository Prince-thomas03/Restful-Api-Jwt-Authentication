const express = require('express')
const router = express.Router()
const { getGoal, postGoal, updateGoal, deleteGoal } = require('../controllers/goalControllers')



router.route('/').get(getGoal).post(postGoal)

// router.get('/', setGoal)
// router.post('/', postGoal)

router.route('/:id').put(updateGoal).delete(deleteGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

module.exports = router