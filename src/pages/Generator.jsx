import React from 'react'
import Exercisecard from '../components/Exercisecard'

const Generator = (props) => {

    const {workout} = props

  return (
    <div>
        {
            workout.map((exercise, index)=>{
                return(
                    <div className='m-6' key={index}>
                        <Exercisecard index={index} exercise={exercise} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Generator