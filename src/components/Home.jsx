import React from 'react'
import hero from '../assets/hero.jpg'
import logo from '/logo2.svg'
import about from '../assets/cool.jpg'
import barbell from '../assets/barbell.svg'
import target from '../assets/target.svg'
import muscle from '../assets/muscle.svg'
import workout from '../assets/Workout.svg'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';


function Home() {

  const { isAuthenticated, loginWithPopup } = useAuth0();
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    if (isAuthenticated) {
      navigate('/workout');
    } else {
      loginWithPopup();
    }
  };


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
            hover:scale-110"
            onClick={handleGetStartedClick}
            >Get Started!</button>
          </div>
        </div>
      </div>

      <div id='about' class=" flex justify-center pt-24 pb-28 bg-neutral">
        <div class="ml-24">
          <div className='absolute w-[31rem] h-[21rem] blur-lg  bg-gradient-to-t from-[#FD6A00] to-[#FBA701]'></div>
          <img className='relative w-[80%] left-12 top-10 rounded-2xl' src={about} alt="Fitness Freaks Workout"/>
        </div>
        <div className='my-auto ml-16'>
          <h1 className='font-semibold text-3xl mb-6'>About Us</h1>
          <div  className='max-w-[80%] text-justify'>
            <p className='mb-3' >Welcome to <strong>Fitness Freaks</strong>, the ultimate destination for workout warriors and fitnessnewbies alike! We're your digital workout buddy, here to make exercise as fun as possible. Our cutting-edge workout generatorcrafts personalized routines based on your goals, favorite muscle groups, and workout style. No more scrolling throughendless generic workouts – simply tell us what you need, and we'll whip up a plan that will leave you sweating, smiling, andmaybe even a little sore.</p> 
            <p>Join the Fitness Freaks family today, and let us take the guesswork out of your workouts. Because at the end of the dayfitness should be fun, personalized, and just a little bit freaky. So, lace up those sneakers, take a deep breath, andlet’sget freaky with fitness!</p>
          </div>
        </div>
      </div>

      <div id='features' className='mt-14 mb-20'>
        <div className=' flex flex-col items-center'>
          <img className='max-w-7' src={logo} alt="" />
          <h1 className='font-semibold text-3xl' >Why Choose Us!</h1>
        </div>
        <div className='flex justify-evenly my-16'>
          <div className='w-72 h-96 bg-neutral rounded-3xl flex flex-col items-center pt-12 feature-card'>
            <img className='w-12' src={muscle} alt="" />
            <h1 className='mt-7 mb-4 text-lg font-semibold'>Tailored Body Shape Plans</h1>
            <p className='mx-6 max-w-[75%] text-justify'>Whether you're looking to bulk up, slim down, or achieve a specific physique, we've got you covered with exercises that target your goals and ambitions effectively.</p>
          </div>
          <div className='w-72 h-96 bg-neutral rounded-3xl flex flex-col items-center pt-11 feature-card'>
            <img className='w-14' src={target} alt="" />
            <h1 className='mt-7 mb-4 text-lg font-semibold'>Muscle-Specific Workouts</h1>
            <p className='mx-6 max-w-[75%] text-justify'>Say goodbye to one-size-fits-all routines! Focus on each muscle with precision. We generate specialized exercises to help you build strength and tone in areas of your choice.</p>
          </div>
          <div className='w-72 h-96 bg-neutral rounded-3xl flex flex-col items-center pt-12 feature-card'>
            <img className='w-16' src={workout} alt="" />
            <h1 className='mt-4 mb-4 text-lg font-semibold'>Extensive Exercise Library</h1>
            <p className='mx-6 max-w-[75%] text-justify'>Explore schemes that keep your journey exciting and dynamic. From high-intensity training to steady-state cardio, our website offers schemes to match all of your preferences.</p>
          </div>
          <div className='w-72 h-96 bg-neutral rounded-3xl flex flex-col items-center pt-14 feature-card'>
            <img className='w-16' src={barbell} alt="" />
            <h1 className='mt-9 mb-4 text-lg font-semibold'>Diverse Workout Schemes</h1>
            <p className='mx-6 max-w-[75%] text-justify'>Keep your routine fresh and challenging. Our extensive library includes exercises for all fitness levels, so you always have new moves to include into your workouts..</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home