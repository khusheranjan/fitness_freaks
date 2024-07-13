import React, { useState } from 'react';
import { WORKOUTS } from '../utils/swolder';

const Workout = () => {
  const [poison, setPoison] = useState('individual');
  const [showOptions, setShowOptions] = useState(false);
  const [musclesGroup, setMusclesGroup] = useState([])
  const [muscles, setMuscles] = useState('')

  const layoutfunc = () => {
    if (poison === 'individual') {
      return (
        <div>
          {
            WORKOUTS[poison].map((mus, musind) =>{
              return(
                <div onClick={musclestotrain} key={musind}>{mus}</div>
              )
            })
          }
        </div>
      );
    }
    else return(
      Object.keys(WORKOUTS[poison]).map((mus, musind) =>{
        return(
          <div onClick={musclestotrain} key={musind}>{mus}</div>
        )
      })
    )
  };


  const musclestotrain= () =>{
    setMusclesGroup([...musclesGroup, muscles])
    console.log(musclesGroup)
  }

  
  return (
    <div>
      {
        Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              className='btn capitalize'
              onClick={() => {
                setPoison(type);
                setMuscles([])
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
  );
};

export default Workout
