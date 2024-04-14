import React, { useEffect } from 'react'
import { FaSun } from "react-icons/fa";
import image from '../assets/Walking.png'
import { Link } from 'react-router-dom';

const handleClick = () => {
  // Redirect to the home page with the hash appended to the URL
  window.location.href = '/#features';
};
const handleClick2 = () => {
  // Redirect to the home page with the hash appended to the URL
  window.location.href = '/#pricing';
};

const Login2 = () => {
 
  console.log('Walking', typeof(Walking))
  return (
    <div className='bg-[#5465FF] text-white h-[600px] sm:h-screen md:h-screen w-full flex items-center flex-col gap-[0px]'>
      <div className='mt-[63px]'>
        <div className='text-[16px] sm:text-[20px] flex flex-row sm:flex-row ml-[30px] sm:ml-[70px] md:ml-[100px] gap-[70px] sm:gap-[100px] md:gap-[300px]'>
          <p><FaSun size={20}/></p>
          <Link to={'/'}> <p>Home</p></Link>
          <a href="#" onClick={handleClick}>
  <p>Features</p></a>
          <a href="#" onClick={handleClick2}><p>Pricing</p></a>
        </div>
        <div className='flex mt-[200px] sm:mt-[60px] items-center justify-top flex-row'>
          <h1 className='text-[35px] sm:text-[71px] md:text-[91px] w-[400px] sm:w-[600px] md:w-[750px] ml-[20px] sm:ml-[80px] font-staatliches'>
            UNLOCK THE WORLD WITH LIMITLESS LOGIN OPTIONS.
          </h1>
          <div>
          <img src={image} alt="Walking" className='w-[400px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[600px] md:h-[750px] ml-[20px] sm:ml-[80px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login2
