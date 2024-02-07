import React from 'react'
import { GrCloudlinux } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ImHangouts } from "react-icons/im";


const Footer = () => {
  return (
    <div className='bg-black text-white'>
    <div className='bg-black text-white text-[16px] flex-col sm:flex-row md:flex md:gap-[390px] md:pl-[120px] md:pr-[120px]  p-[20px] pt-[40px]'>
      <div>
        <h3 className='font-bold text-[#788BFF] text-[24px] mb-[5px]' >Company</h3>
        <p className='mb-[5px]'>About</p>
        <p className='mb-[5px]'>Career</p>
        <p className='mb-[5px]'>Blog</p>
      </div>
      <div>
        <h3 className='font-bold text-[#788BFF] text-[24px] mb-[5px]' >Support</h3>
        <p className='mb-[5px]'>FAQ</p>
        <p className='mb-[5px]'>Contact</p>
        <p className='mb-[5px]'>Terms</p>
      </div>
      <div>
        <h3 className='font-bold text-[#788BFF] text-[24px] mb-[5px]' >Social</h3>
        <p className='mb-[5px]'>Facebook</p>
        <p className='mb-[5px]'>Twitter</p>
        <p className='mb-[5px]'>Linkedin</p>
      </div>
    </div>
    <div className='flex justify-center flex-col mt-[20px] sm:mt-[50px] md:mt-[50px]'>
    <div className='flex justify-center'><GrCloudlinux size={80} color='#9BB1FF'/></div>
    <div className='flex justify-center pt-[10px] gap-[20px]'>
    <FaTwitter size={30} />
    <FaInstagram size={30} />
    <FaFacebook size={30} />
    <ImHangouts size={30} />
    </div>
    <p className='flex justify-center mt-[10px] mb-[30px]'>© 2023 MachFolio. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer