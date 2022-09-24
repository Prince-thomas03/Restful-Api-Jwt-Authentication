const express = require('express')
const router = express.Router()
const { setGoal, postGoal, updateGoal, deleteGoal } = require('../controllers/goalControllers')



router.route('/').get(setGoal).post(postGoal)
// router.get('/', setGoal)
// router.post('/', postGoal)

router.route('/:id').put(updateGoal).delete(deleteGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

module.exports = router