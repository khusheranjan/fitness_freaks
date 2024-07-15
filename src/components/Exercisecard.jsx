import React from 'react'

const Exercisecard = (props) => {

    const {exercise, index} = props
  return (
    <div key={index}>
        <h1>{exercise.name}</h1>
        <p>{exercise.description.split('___').join(' ')}</p>
        <h2 className='capitalize'>{exercise.muscles.join(' ')}</h2>
        <h2>{exercise.reps}</h2>
        <h2>{exercise.rest}</h2>
        <h2>{exercise.tempo}</h2>
    </div>
  )
}

export default Exercisecard