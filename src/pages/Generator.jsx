import React from 'react'
import Exercisecard from '../components/Exercisecard'

const Generator = (props) => {

    const {workout} = props

  return (
    <div>
        {
            workout.map((exercise, index)=>{
                return(
                    <Exercisecard index={index} exercise={exercise} />
                )
            })
        }
    </div>
  )
}

export default Generator