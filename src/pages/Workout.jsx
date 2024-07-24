import React, { useState } from 'react';
import { WORKOUTS, SCHEMES } from '../utils/swolder';
import Poisoncard from '../components/Poisoncard';
import Button from '../components/Button';
import gymroom from '../assets/gymroom.jpg'
import { useNavigate } from 'react-router-dom';
import scheme from '../assets/scheme.jpg'

const Workout = (props) => {
  const { poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout } = props;
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate()
  
  const handleUpdateWorkout= ()=>{
    updateWorkout()
    navigate('/generator')
  }


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
  };

  return (
    <>
      <div className='absolute'>
        <img src={gymroom} alt="" />
      </div>
      <div className='relative bg-black bg-opacity-60'>
        <div className=" py-10 text-gray-100 text-5xl font-bold text-center">Pick your <a className='text-accent'> Poison </a></div>
        <div className='flex flex-wrap mt-6 pb-24 justify-evenly'>
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
      </div>
      <div className="py-10 text-gray-100 text-5xl font-bold text-center">Select <a className='text-accent'> Muscles </a> you want to Train </div>
      <div className='bg-neutral border border-accent rounded-lg flex flex-col w-[80%] mx-auto'>
        <button onClick={()=>{setShowOptions(!showOptions)}} className='relative p-3 items-center'>
          <p className='uppercase'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
        </button>
        {showOptions && (
          <div className='flex flex-col px-3 pb-3'>
            {(poison === 'individual' ? WORKOUTS[poison].groups : Object.keys(WORKOUTS[poison].groups)).map((group, groupIndex) => {
              return (
                <button onClick={() => {
                  musclestotrain(group)
                }} key={groupIndex} className={'hover:text-accent duration-200 ' + (muscles.includes(group) ? ' text-accent' : ' ')}>
                  <p className='uppercase'>{group.replaceAll('_', ' ')}</p>
                </button>
              )
          })}
          </div>
        )}
  </div>
      
  <div className='absolute mt-20'>
        <img className='w-screen' src={scheme} alt="scheme" />
      </div>

      <div className='top-20 pb-20 pt-16 relative bg-black bg-opacity-65'>
        <div className='pb-14 text-gray-100 text-5xl font-bold text-center'>Choose your <a className='text-accent'>Scheme</a></div>
          <div className='flex justify-evenly relative pb-7'>
            {Object.keys(SCHEMES).map((goals, goalsIndex) => (
                <div className="card bg-neutral w-96 shadow-xl" key={goalsIndex}>
                  <div className="card-body">
                    <h2 className="card-title capitalize pb-2">{goals.replaceAll('_', ' ')}</h2>
                    <p className='min-h-60 text-justify'>{SCHEMES[goals].description}</p>
                    <div className="card-actions justify-end">
                      <Button
                        key={goalsIndex}
                        text={goals.replaceAll('_', ' ')}
                        action={() => setGoal(goals)}
                      />
                    </div>
                  </div>
                </div>
            ))}
          </div>
      </div>
      <div className='mt-36 mb-8 text-center '>
        <button className='bg-gradient-to-t from-[#d64000] to-[#eba80d] btn btn-wide h-16 rounded-full border-none hover:scale-110 text-2xl text-black font-bold' onClick={handleUpdateWorkout}>Formulate!</button>
      </div>
    </>
  );
};

export default Workout;
