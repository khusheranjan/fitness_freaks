import React from 'react'

const Button = (props) => {
    const {text, action} = props 
  return (
    <button onClick={action}>
        {text}
    </button>
  )
}

export default Button