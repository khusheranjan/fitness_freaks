import React from 'react'

const Button = (props) => {
    const {text, action} = props 
  return (
    <button className='btn btn-lg bg-gradient-to-t from-[#FE6100] to-[#FBB002] text-black font-bold text-xl capitalize' onClick={action}>
        {text}
    </button>
  )
}

export default Button