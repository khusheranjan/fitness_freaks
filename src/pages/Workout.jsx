import React, { useState } from 'react';
import { WORKOUTS , SCHEMES } from '../utils/swolder';

const Workout = (props) => {

  const {poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout} = props

  const [showOptions, setShowOptions] = useState(false);

  const layoutfunc = () => {
    if (poison === 'individual') {
      return (
        <div>
          {
            WORKOUTS[poison].map((mus, musind) =>{
              return(
                <div onClick={() =>{
                    musclestotrain(mus)
                }} key={musind}>{mus}</div>
              )
            })
          }
        </div>
      );
    }
    else return(
      Object.keys(WORKOUTS[poison]).map((mus, musind) =>{
        return(
          <div onClick={() =>{
            musclestotrain(mus)
          }} key={musind}>{mus}</div>
        )
      })
    )
  };


  const musclestotrain= (mus) =>{
    setMuscles([...muscles, mus])
}
console.log(muscles)
console.log(goal)


  return (
    <>
    <div>
      {
        Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              className='btn capitalize m-3'
              onClick={() => {
                setPoison(type);
                setMuscles ([])
                setShowOptions(!showOptions);
              }}
              key={typeIndex}
            >
              {type.replaceAll('_', " ")}
            </button>
          );
        })
      }
      {showOptions ? layoutfunc() : null}
    </div>

    <div>
        {
            Object.keys(SCHEMES).map((goals, goalsIndex) =>{
                return(
                    <button className='btn m-3 capitalize' onClick={() =>{
                        setGoal(goals)
                    }} key={goalsIndex}>{goals.replaceAll("_", " ")}</button>
                )
            })
        }
    </div>
    <div>
      <button className='btn' onClick={updateWorkout}>Formulate</button>
    </div>
    </>
  );
};

export default Workout
