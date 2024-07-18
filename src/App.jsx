import { useState } from 'react'
import Workout from './pages/Workout';
import { generateWorkout } from './utils/function';
import Generator from './pages/Generator';
import Button from './components/Button';
import Poisoncard from './components/Poisoncard';
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from './components/Navbar';


function App() {
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('')
  const [workout, setWorkout] = useState(null)

  const {user, loginWithRedirect} = useAuth0();
  console.log(user)

  const updateWorkout= ()=>{
    if(muscles.length <1) return

    let newWorkout= generateWorkout({poison, muscles, goal})
    setWorkout(newWorkout)
    console.log(newWorkout)
  }

  return (
    <>

      <Navbar />
      <Workout
      poison= {poison}
      setPoison= {setPoison}
      muscles= {muscles}
      setMuscles= {setMuscles}
      goal= {goal}
      setGoal={setGoal}
      updateWorkout= {updateWorkout}
       />
       {workout && (<Generator workout= {workout} />)}

       <Button text="Submit" action={updateWorkout} />
       <Poisoncard />
    </>
  )
}

export default App
