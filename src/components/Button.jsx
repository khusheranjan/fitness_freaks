import React from 'react'

const Button = (props) => {
    const {text, action} = props 
  return (
    <button className='btn bg-gradient-to-t from-[#d64000] to-[#eba80d] text-black font-bold text-lg capitalize border-0' onClick={action}>
        {text}
    </button>
  )
}

export default Button