import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const AddTask = () => {
    const [todo, setTodo] = useState({
        name: ""
    })

    const addTodo = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:4000/api/v1/createtodo', todo)
        console.log(res.data)
      }
    

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setTodo({...todo, [name]: value})
    }
    return (
        <>
            <div className='container mt-5 py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <Link to='/' className='btn btn-primary float-end'>back</Link>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={addTodo}>
                                    <div className='form-group mb-3'>
                                        <label>Name</label>
                                        <input value={todo.name} name='name' onChange={handleOnChange} className='form-control' />
                                    </div>

                                    <div className='form-group mb-3'>
                                       <button className='btn btn-primary'>Add Todo</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTask