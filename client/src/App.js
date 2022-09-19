import React from 'react'
import DisplayTodo from './components/DisplayTodo'
import CreateTodo from './components/CreateTodo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='todo-Container'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<DisplayTodo />} />
          <Route path='/add-list' element={<CreateTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
