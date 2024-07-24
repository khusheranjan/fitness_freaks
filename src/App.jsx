import React, { useState } from 'react';
import { generateWorkout } from './utils/function';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Workout from './pages/Workout';
import Generator from './pages/Generator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState('');
  const [workout, setWorkout] = useState(null);

  const { user, loginWithPopup, isAuthenticated, logout } = useAuth0();
  const updateWorkout = () => {
    if (muscles.length < 1) return;

    let newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);
    console.log(newWorkout);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={
            <Workout
              poison={poison}
              setPoison={setPoison}
              muscles={muscles}
              setMuscles={setMuscles}
              goal={goal}
              setGoal={setGoal}
              updateWorkout={updateWorkout}
            />
          } />
          <Route path="/generator" element={
            workout && <Generator workout={workout} />
          } />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
