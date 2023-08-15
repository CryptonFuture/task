const Task = require('../models/todo.model')

const addTodo = async (req, res) => {
    try {

        const todo = await new Task({
            name: req.body.name
        })

        const task = await todo.save()

        res.status(200).json({ success: true, task, message: 'task successfully completed' })

    } catch (error) {
        res.status(500).json({ success: false, message: 'internal server error '+ error.message })
        console.log(error);
    }

}

const getTodo = async (req, res) => {
    try {
        const todo = await Task.find()

        if (todo.length > 0) {
            res.status(200).json({ success: true, todo, message: 'task successfully completed' })

        } else {
            res.status(400).json({ success: false, message: 'no result found' })

        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'internal server error' })
    }

}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params

        const todo = await Task.findByIdAndDelete(id)

        if (!todo) {
            res.status(400).json({ success: false, message: `no task found given by id: ${id}` })

        } else {
            res.status(200).json({ success: true, message: 'task successfully deleted' })

        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'internal server error' })

    }
}

const updateTask = async (req, res) => {
    try {

        const { id } = req.params

        const todo = await Task.findByIdAndUpdate(id, req.body)

         await todo.save()

        res.status(200).json({ success: true, message: 'task successfully updated' })


    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'internal server error' })

    }
}

module.exports = {
    addTodo,
    getTodo,
    deleteTask,
    updateTask
}