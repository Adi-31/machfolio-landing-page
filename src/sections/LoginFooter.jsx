import React from 'react'
import { GrCloudlinux } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import { ImHangouts } from "react-icons/im";
import { FaTelegram } from "react-icons/fa";


const LoginFooter = () => {
  return (
    <div className='bg-[#001C55] text-white'>
    <div className='bg-[#001C55] text-[#A6E1FA] text-[16px] flex-col sm:flex-row md:flex md:gap-[390px] md:pl-[120px] md:pr-[120px]  p-[20px] pt-[40px]'>
      <div>
        <h3 className='font-bold text-white text-[24px] mb-[5px]' >Support</h3>
        <p className='mb-[5px]'>FAQ</p>
        <p className='mb-[5px]'>Contact</p>
        <p className='mb-[5px]'>Terms</p>
      </div>
      <div>
        <h3 className='font-bold text-white text-[24px] mb-[5px]' >Account</h3>
        <p className='mb-[5px]'>Settings</p>
        <p className='mb-[5px]'>Security</p>
        <p className='mb-[5px]'>logout</p>
      </div>
      
      <div>
        <h3 className='font-bold text-white text-[24px] mb-[5px]' >Legal</h3>
        <p className='mb-[5px]'>Privacy</p>
        <p className='mb-[5px]'>Terms</p>
        <p className='mb-[5px]'>Cookies</p>
      </div>
    </div>
    <div className='flex justify-center flex-col mt-[20px] sm:mt-[50px] md:mt-[50px]'>
    <div className='flex justify-center'><GrCloudlinux size={80} color='#A6E1FA'/></div>
    <div className='flex justify-center pt-[10px] gap-[20px]'>
    <FaTwitter size={30} color='#A6E1FA' />
    <FaInstagram size={30} color='#A6E1FA' />
    <FaFacebook size={30} color='#A6E1FA' />
    <FaTelegram  size={30} color='#A6E1FA' />
    </div>
    <p className='text-[#A6E1FA] flex justify-center mt-[10px] mb-[30px]'>© 2023 by Login Gateway Inc.</p>
    </div>
    </div>
  )
}

export default LoginFooter