import React from 'react'
import { Link } from 'react-router-dom';

const Login3 = () => {
  return (
    <div className='bg-[#000000]  flex items-center flex-col justify-center pt-[50px] pl-[20px] pr-[20px] h-[500px]  sm:pb-[50px] ' >
      
      <h1 className='font-staatliches text-[28px]  sm:text-[38px] md:text-[48px] w-[500px] sm:w-[700px] md:w-[1020px] mb-[20px] md:text-[60px] text-[#A6E1FA]'>Ready to dive into the realm of convenience? Choose your path now!</h1>
      <div className='ml-[60px] sm:ml-[20px] flex-row sm:flex-col gap-[20px] ' >
      <button className="ml-[0px] mb-[0px] mt-[20px] bg-[#E2FDFF] hover:bg-blue-700 text-black h-[40px] w-[350px] sm:w-[200px] md:w-[200px] font-bold py-2 px-4 rounded" >Login with Email</button>
      <Link to="/login">
      <button className="sm:ml-[20px] mb-[40px] mt-[20px] bg-[#5465FF] hover:bg-cyan-700 text-white h-[40px] w-[350px] sm:w-[200px] md:w-[200px] font-bold py-2 px-4 rounded" >Continue with Google</button>
      </Link>
      </div>
    </div>
  )
}

export default Login3