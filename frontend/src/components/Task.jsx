import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Task = () => {
  const [todo, setTodo] = useState([])

  const getTodo = async () => {
    const res = await axios.get('http://localhost:4000/api/v1/gettodo')
    setTodo(res.data.todo)
  }

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <>
      <div className='container mt-5 py-5'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header'>
                <Link to='/addTask' className='btn btn-primary float-end'>createTodo</Link>
              </div>
              <div className='card-body'>


                <table className='table table-striped table-bordered'>
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      todo.map((item) => (
                        <tr>
                          <td>{item.name}</td>
                          <td>
                            <button className='btn btn-info'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>

                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Task