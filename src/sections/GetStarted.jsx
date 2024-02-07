import React from 'react'
import { GiSplitCross } from "react-icons/gi";

const GetStarted = () => {
  return (
    <div className='bg-[#9BB1FF]  flex items-center flex-col justify-center pt-[50px] pl-[20px] pr-[20px] h-[500px] sm:h-screen sm:pb-[100px] ' >
      <GiSplitCross color="black" size={100} />
      <h1 className='font-staatliches text-[32px] sm:text-[48px] mb-[20px] md:text-[60px] text-black'>GET STARTED</h1>
      <p className='font-spacegrotesk text-center text-black text-[17px] sm:text-[25px] w-[350px] sm:w-[450px]' >Jump on board the MachFolio rocket and propel your investments to new financial heights. Are you ready to defy the odds and conquer the stock market?</p>
      <div className='ml-[60px] sm:ml-[20px] flex-row sm:flex-col gap-[20px] ' >
      <button className="ml-[0px] mb-[0px] mt-[20px] bg-[#5465FF] hover:bg-blue-700 text-white h-[40px] w-[250px] sm:w-[100px] md:w-[100px] font-bold py-2 px-4 rounded" >Sign Up</button>
      <button className="sm:ml-[20px] mb-[40px] mt-[20px] bg-[#E2FDFF] hover:bg-blue text-black h-[40px] w-[250px] sm:w-[150px] md:w-[150px] font-bold py-2 px-4 rounded" >Join Now</button>
      </div>
    </div>
  )
}

export default GetStarted