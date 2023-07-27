import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Speech Recognition</h1>
      <div className="card">
        <div className="big">Count is: {count}</div>
        <button onClick={() => setCount((count) => count + 5)}>
          increase count
        </button>
        <br/>
        <button onClick={() => setCount((count) => count - 5)}>
          decrease count 
        </button>
        <br/>
        <button onClick={() => setCount((count) => count - count)}>reset count</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
