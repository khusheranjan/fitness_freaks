import React, { useState } from 'react';
import { WORKOUTS, SCHEMES } from '../utils/swolder';
import Poisoncard from '../components/Poisoncard';
import Button from '../components/Button';

const Workout = (props) => {
  const { poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout } = props;
  const [showOptions, setShowOptions] = useState(false);

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
    
    if(poison !=="individual"){
      setMuscles([group])
      setShowOptions(false)
      return
    } 
  
    setMuscles([...muscles, group]);
    if(muscles.length === 2) {
      setShowOptions(false)
    }
  };

  console.log(muscles);
  console.log(goal);

  const handleWorkoutTypeClick = (type) => {
    setPoison(type);
    setMuscles([]);
    setShowOptions(true);
  };

  return (
    <>
      <div className='grid grid-cols-2 justify-items-center gap-y-10'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => (
          <Poisoncard
            key={typeIndex}
            type={type.replaceAll('_', ' ')}
            description={WORKOUTS[type].description}
            handleClick={() => handleWorkoutTypeClick(type)}
          />
        ))}
      </div>
      
      <div>{showOptions && layoutfunc()}</div>

      <div>
        {Object.keys(SCHEMES).map((goals, goalsIndex) => (
          <Button
            key={goalsIndex}
            text={goals.replaceAll('_', ' ')}
            action={() => setGoal(goals)}
          />
        ))}
      </div>

      <Button text="Formulate" action={updateWorkout} />
    </>
  );
};

export default Workout;
