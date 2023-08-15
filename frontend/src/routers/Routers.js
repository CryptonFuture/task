import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Task from '../components/Task'
import AddTask from '../components/AddTask'

const Routers = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Task />} />
            <Route path='/addTask' element={<AddTask />} />
        </Routes>
    </Router>
  )
}

export default Routers