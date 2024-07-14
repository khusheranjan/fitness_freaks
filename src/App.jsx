import { useState } from 'react'
import Workout from './pages/Workout';
import { generateWorkout } from './utils/function';

function App() {
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('')
  const [workout, setWorkout] = useState(null)

  const updateWorkout= ()=>{
    if(muscles.length <1) return

    let newWorkout= generateWorkout({poison, muscles, goal})
    setWorkout(newWorkout)
  }

  return (
    <>
      <Workout
      poison= {poison}
      setPoison= {setPoison}
      muscles= {muscles}
      setMuscles= {setMuscles}
      goal= {goal}
      setGoal={setGoal}
      updateWorkout= {updateWorkout}
       />

    </>
  )
}

export default App
