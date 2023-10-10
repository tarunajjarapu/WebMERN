const express = require('express')
const router = express.Router()
const { getGoals,setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete goal ${ req.params.id }`})
})

module.exports = router