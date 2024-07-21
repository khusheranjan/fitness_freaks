import React from 'react'
import hero from '../assets/hero.jpg'
import Button from './Button'
import logo from '/logo2.svg'

function Home() {
  return (
    <div className=''>
        <img src={hero} alt="hero"  className='absolute'/>
        <div className='relative z-10 bg-opacity-[0.3] bg-black flex flex-col items-center justify-center h-screen text-white'>
            <img src={logo} alt='logo' className='w-10'/>
            <h1 className='text-6xl font-bold mb-4'>Elevate Your Fitness Game</h1>
            <h3 className='text-xl font-semibold mb-4'>Get Personalized Workouts for Maximum Results!</h3>
            <Button text="Join Us" />
        </div>
    </div>
  )
}

export default Home