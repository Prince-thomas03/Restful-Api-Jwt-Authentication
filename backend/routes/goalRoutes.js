// const express = require('express')
// const router = express.Router()
// const { getGoal, postGoal, updateGoal, deleteGoal } = require('../controllers/goalControllers')

// const {protect}=require('../middlewares/authMiddleware')

// router.route('/').get(getGoal).post(postGoal)

// // router.get('/', setGoal)
// // router.post('/', postGoal)

// router.route('/:id').put(updateGoal).delete(deleteGoal)

// // router.put('/:id', updateGoal)

// // router.delete('/:id', deleteGoal)

// module.exports = router

const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalControllers')

const { protect } = require('../middlewares/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router