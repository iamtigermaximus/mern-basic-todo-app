import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import UpdateTodo from '../components/UpdateTodo'
import TodoLists from '../components/TodoLists'

export function DisplayTodo() {
  const [id, setId] = useState('')
  const [update, setUpdate] = useState(false)
  const [infoTodo, setInfoTodo] = useState([])
  const [modal, setModal] = useState(false)

  useEffect(
    function () {
      axios
        .get('https://mern-basic-todo-app.herokuapp.com/api/todoapp')
        .then((res) => {
          setInfoTodo(res.data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    [update]
  )

  const editHandler = (e) => {
    setId(e.target.name)
    setModal(true)
  }

  const updateHandler = () => {
    setUpdate(!update)
  }

  const deleteHandler = (e) => {
    axios.delete(`https://mern-basic-todo-app.herokuapp.com/api/todoapp/${e.target.name}`)

    setInfoTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name)
    })
  }

  const closeHandler = () => {
    setId('')
    setModal(false)
  }
  console.log(infoTodo)
  return (
    <section className='container'>
      <Link to='/add-list' className='button-new'>
        <button className='todo-btn'>➕ Add new todo</button>
      </Link>
      <section className='todo-data'>
        <h1>Hello</h1>
        <ul className='todo-list-block'>
          {infoTodo.map((todoInfo, index) => (
            <TodoLists
              key={index}
              todoInfos={todoInfo}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      </section>
      {modal ? (
        <section className='update-container'>
          <div className='update-todo-data'>
            <p onClick={closeHandler} className='close'>
              &times;
            </p>

            <UpdateTodo
              _id={id}
              closeHandler={closeHandler}
              updateHandler={updateHandler}
            />
          </div>
        </section>
      ) : (
        ''
      )}
    </section>
  )
}

export default DisplayTodo
