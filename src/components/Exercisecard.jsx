import React, { useState } from 'react'

const Exercisecard = (props) => {

    const {exercise, index} = props
    const [setsCompleted, setSetsCompleted] = useState(0)


  return (
    <div className="card bg-neutral text-primary-content w-[70%] mx-auto">
      <div className="card-body">
        <div className="card-title capitalize">
          <h2>0{index+1}</h2>
          <h2>{exercise.name.replaceAll('_', ' ')}</h2>
        </div>
        <h3 className='capitalize'>{exercise.muscles.join(' ')}</h3>
        <p>{exercise.description.split('___').join(' ')}</p>
        <div className='flex mx-10 mt-4'>
          <div className="border-2 rounded-xl w-[33%] m-2 py-2 px-4">
            <h5 className=''>Reps</h5>
            <h5 className="">{exercise.reps}</h5>
          </div>
          <div className="border-2 rounded-xl w-[33%] m-2 py-2 px-4">
            <h5 className=''>Rest</h5>
            <h5 className="">{exercise.rest}</h5>
          </div>
          <div className="border-2 rounded-xl w-[33%] m-2 py-2 px-4">
            <h5 className=''>Tempo</h5>
            <h5 className="">{exercise.tempo}</h5>
          </div>
        </div>
          <div className='btn w-[50%] mx-auto mt-6 bg-gradient-to-t from-[#FE6100] to-[#FBB002] text-black text-lg' onClick={()=> setSetsCompleted((setsCompleted + 1)%6)}>
            <h5>Sets Completed!</h5>
            <h5 >{setsCompleted}/5</h5>
          </div>
      </div>
    </div>
  )
}

export default Exercisecard