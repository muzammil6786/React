import { useState } from 'react'
import './App.css'
import Blog from './components/blog'
import Footer from './components/footer'
import Header from './components/header'
import Items from './components/items'
function App() {
  const [count, setCount] = useState(0);
  function IncrementCount() {
    setCount(count + 1);
  }
  function DecrementCount() {
    setCount(count - 1);
  }
  

  return (
    <>
      <h1>Blog Application</h1>
      <Header />
      <p> Counter : {count}</p>
      <button onClick={IncrementCount}>Increment</button>
      <button onClick={DecrementCount}>Decrement</button>

      <div className='card-container'>
        <Blog />
      </div>
      <Items />
      <Footer />
    </>
  )
}


export default App
