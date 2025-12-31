import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/input'
import Form from './components/form'
import FetchTodo from './components/fetchtodo.jsx'

function App() {
  
  return (
    <>
      <h3>learning React</h3>
      {/* <InputBox /> */}
      <Form />
      <FetchTodo />
    </>
  )
}

export default App
