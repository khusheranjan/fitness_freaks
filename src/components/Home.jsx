import React from 'react'
import hero from '../assets/hero.jpg'
import Button from './Button'
import logo from '/logo2.svg'
import about from '../assets/cool.jpg'
import barbell from '../assets/barbell.svg'
import target from '../assets/target.svg'
import muscle from '../assets/muscle.svg'



function Home() {
  return (
    <>
      <div
        className="hero md:min-h-screen"
        style={{
          backgroundImage: `url(${hero})`,
        }}>
        <div className="hero-overlay bg-black bg-opacity-[0.4]"></div>
        <div className="hero-content text-center">
          <div>
            <div className='max-w-8 mx-auto'>
              <img src={logo} alt="logo" />
            </div>
            <h1 className="mb-5 text-gray-100 text-6xl font-bold">Elevate Your<a className='text-accent'> Fitness Game </a></h1>
            <p className="mb-5 text-gray-100 max-w-sm mx-auto">
            Discover the power of consistent training and achieve your fitness goals with Fitness Freaks.
            </p>
            <button className="btn btn-lg rounded-full bg-gradient-to-t from-[#d64000] to-[#eba80d] border-none text-gray-100 
            hover:scale-110">Get Started</button>
          </div>
        </div>
      </div>

      <div class=" flex justify-center py-24 bg-neutral">
        <div class="ml-24">
          <div className='absolute w-[33rem] h-[22rem] blur-lg  bg-gradient-to-t from-[#FD6A00] to-[#FBA701]'></div>
          <img className='relative w-[80%] left-12 top-10 rounded-2xl' src={about} alt="Fitness Freaks Workout"/>
        </div>
        <div className='my-auto ml-16'>
          <h1 className='font-semibold text-3xl mb-6'>About Us</h1>
          <div  className='max-w-[80%]'>
            <p className='mb-3' >Welcome to <strong>Fitness Freaks</strong>, the ultimate destination for workout warriors and fitnessnewbies alike! We're your digital workout buddy, here to make exercise as fun as possible. Our cutting-edge workout generatorcrafts personalized routines based on your goals, favorite muscle groups, and workout style. No more scrolling throughendless generic workouts – simply tell us what you need, and we'll whip up a plan that will leave you sweating, smiling, andmaybe even a little sore.</p> 
            <p>Join the Fitness Freaks family today, and let us take the guesswork out of your workouts. Because at the end of the dayfitness should be fun, personalized, and just a little bit freaky. So, lace up those sneakers, take a deep breath, andlet’sget freaky with fitness!</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img src={logo} alt="" />
          <h1>Fitness Freaks</h1>
        </div>
        <div>
          <div>
            <img src={barbell} alt="" />
            <h1></h1>
            <p></p>
          </div>
          <div>
            <img src={target} alt="" />
            <h1></h1>
            <p></p>
          </div>
          <div>
            <img src={muscle} alt="" />
            <h1></h1>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home