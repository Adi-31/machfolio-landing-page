import React from 'react'
import Star from '../assets/star'
import Triangle from '../assets/triangle'


const About = () => {
  return (
    <div className='bg-[#5465FF]  h-[1300px] sm:h-screen w-full flex items-center justify-top flex-col sm:flex-row-reverse md:flex-row-reverse gap-[150px] sm:gap-[50px] p-[20px] sm:pl-[25px] md:pl-[100px] sm:pr-[25px] md:pr-[100px] '>
      <div className='sm:space-x-10 md:space-x-10'>
      <Star  />
      <Triangle />
      </div>
      <div className='pt-[10px] flex flex-col space-y-8 sm:w-[800px]'>
      <h1 className='font-staatliches text-[32px] sm:text-[40px] md:text-[48px] text-black  '>Revolutionize your investments</h1>
      <p className='font-spacegrotesk font-bold text-[20px] sm:text-[20px] md:text-[20px] text-white'>Welcome to MachFolio, where AI-driven technology shakes hands with stock market savvy. Our machine learning algorithms optimize your portfolio to minimize risk and maximize profits.</p>
      <p className='font-spacegrotesk font-bold text-[20px] sm:text-[20px] md:text-[20px] text-white'>Wave goodbye to underperforming stocks and ride the wave of intelligent investment. It’s time to trust in the future of fintech.</p>
      <p className='font-spacegrotesk font-bold text-[20px] sm:text-[20px] md:text-[20px] text-white'>Harnessing the power of data, our algorithms analyze market trends, forecast stock performance, and craft a winning formula tailored for your financial success.</p>
      </div>
    </div>
  )
}

export default About