import { useState } from 'react'
import Workout from './pages/Workout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Workout />
    </>
  )
}

export default App
