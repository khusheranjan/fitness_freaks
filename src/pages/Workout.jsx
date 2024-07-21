import React, { useState } from 'react';
import { WORKOUTS, SCHEMES } from '../utils/swolder';
import Poisoncard from '../components/Poisoncard';
import Button from '../components/Button';
import gymroom from '../assets/gymroom.jpg'
import { useNavigate } from 'react-router-dom';

const Workout = (props) => {
  const { poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout } = props;
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate()
  
  const handleUpdateWorkout= ()=>{
    updateWorkout()
    navigate('/generator')
  }


  const layoutfunc = () => {
    if (poison === 'individual') {
      return (
        <div>
          {WORKOUTS[poison].groups.map((group, groupIndex) => (
            <div
              onClick={() => {
                musclestotrain(group);
              }}
              key={groupIndex}
            >
              {group}
            </div>
          ))}
        </div>
      );
    } else {
      return Object.keys(WORKOUTS[poison].groups).map((group, groupIndex) => (
        <div 
          key={groupIndex} 
          onClick={() => {
            musclestotrain(group);
          }}
        >
          <h3 >{group.replaceAll('_', ' ')}</h3>
        </div>
      ));
    }
  };


  const musclestotrain = (group) => {
    
    if (muscles.includes(group)) {
      setMuscles(muscles.filter((val)=> val !== group))
      return
    }

    if(muscles.length > 2){
      return
    }
    
    if(poison !== "individual"){
      setMuscles([group])
      setShowOptions(false)
      return
    } 
  
    setMuscles([...muscles, group])

    if(muscles.length === 2) {
      setShowOptions(false)
    }
  };


  const handleWorkoutTypeClick = (type) => {
    setPoison(type);
    setMuscles([]);
    setShowOptions(true);
  };

  return (
    <>
      <div className='absolute'>
        <img src={gymroom} alt="" />
      </div>
      <div className='flex flex-wrap mt-6 relative'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => (
          <div className='mx-auto' key={typeIndex}>
            <Poisoncard
              type={type.replaceAll('_', ' ')}
              image={WORKOUTS[type].image}
              description={WORKOUTS[type].description}
              handleClick={() => handleWorkoutTypeClick(type)}
            />
          </div>
        ))}
      </div>
      
      <div>{showOptions && layoutfunc()}</div>

      <div className='flex'>
        {Object.keys(SCHEMES).map((goals, goalsIndex) => (
          <div key={goalsIndex}>
            <Button
              key={goalsIndex}
              text={goals.replaceAll('_', ' ')}
              action={() => setGoal(goals)}
            />
          </div>
        ))}
      </div>

      <Button text="Formulate" action={handleUpdateWorkout} />
    </>
  );
};

export default Workout;
