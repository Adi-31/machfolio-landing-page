import React from 'react'
import { FaSun } from "react-icons/fa";

const Login2 = () => {
  return (
    <div className='bg-[#5465FF] text-white h-[600px] sm:h-screen md:h-screen w-full flex items-center flex-col gap-[0px]'>
      <div className='mt-[63px]'>
        <div className='text-[16px] sm:text-[20px] flex flex-row sm:flex-row ml-[30px] sm:ml-[70px] md:ml-[100px] gap-[70px] sm:gap-[100px] md:gap-[300px]'>
          <p><FaSun size={20}/></p>
          <p>Home</p>
          <p>Features</p>
          <p>Pricing</p>
        </div>
        <div className='flex mt-[200px] sm:mt-[60px] items-center justify-top flex-row'>
          <h1 className='text-[35px] sm:text-[71px] md:text-[91px] w-[400px] sm:w-[600px] md:w-[750px] ml-[20px] sm:ml-[80px] font-staatliches'>
            UNLOCK THE WORLD WITH LIMITLESS LOGIN OPTIONS.
          </h1>
          <div>
            <img src='src/assets/Walking.png' height={10} width={520} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login2
