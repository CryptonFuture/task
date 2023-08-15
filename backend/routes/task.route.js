const express = require('express')

const { addTodo, getTodo, updateTask, deleteTask } = require('../controllers/todo.controller')

const router = express.Router()

router.post('/createtodo', addTodo)
router.get('/gettodo', getTodo)
router.put('/updatetodo/:id', updateTask)
router.delete('/deletetodo/:id', deleteTask)

module.exports = router