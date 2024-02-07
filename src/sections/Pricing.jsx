import React from 'react'
import { GrAd } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import { GrCodeSandbox } from "react-icons/gr";
import { GrNodes } from "react-icons/gr";

const Pricing = () => {
  return (
    <div className='bg-black p-[20px] flex-row md:flex gap-[40px] md:pl-[40px] md:pr-[20px] md:pt-[50px] md:pb-[50px]' >
      <div className='bg-[#0D0D0D] gap-[20px] rounded-[20px]  pt-[10px] mt-[10px]  sm:w-[1000px] md:w-[450px]' >
        <GrAd color='#9BB1FF' size={35} />
        <h5 className='font-staatliches ml-[20px] text-[#BFD7FF] text-[35px]' >Essential</h5>
        <h1 className='text-[#E2FDFF] ml-[20px] font-staatliches text-[32px] sm:text-[40px] md:text-[48px]' >$3.99</h1>
        <div className='pt-[15px] flex-row gap-[20px] pl-[20px]' >
        <div className='flex items-center space-x-2 ' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >Basic Access</p>
        </div>
        <div className='flex items-center space-x-2' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >Standard Support</p>
        </div>
        <div className='flex items-center space-x-2' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >Monthly Reports</p>
        </div>
        <div className='flex items-center space-x-2' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >5 Portfolios</p>
        </div>
        </div>
        <button className="ml-[60px] sm:ml-[100px] mb-[20px] mt-[40px] mb-[10px] bg-[#5465FF] hover:bg-blue-700 text-white h-[40px] w-[200px] sm:w-[800px] md:w-[200px] font-bold py-2 px-4 rounded" >Join Now</button>
      </div>

      <div className='bg-[#0D0D0D] gap-[20px] rounded-[20px]  pt-[10px] mt-[10px] sm:w-[1000px] md:w-[450px]' >
        <GrCodeSandbox color='#9BB1FF' size={35} />
        <h5 className='font-staatliches ml-[20px] text-[#BFD7FF] text-[35px]' >Premium</h5>
        <h1 className='text-[#E2FDFF] ml-[20px] font-staatliches text-[32px] sm:text-[40px] md:text-[48px]' >$19.99</h1>
        <div className='pt-[15px] pl-[20px] flex-row gap-[20px]' >
        <div className='flex items-center space-x-2 ' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >Full Access</p>
        </div>
        <div className='flex items-center space-x-2' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >Priority Support</p>
        </div>
        <div className='flex items-center space-x-2' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >Weekly Reports</p>
        </div>
        <div className='flex items-center space-x-2' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >Unlimited Portfolios</p>
        </div>
        </div>
        <button className="ml-[60px] sm:ml-[100px] mb-[20px] mt-[40px] mb-[10px] bg-[#5465FF] hover:bg-blue-700 text-white h-[40px] w-[200px] sm:w-[800px] md:w-[200px] font-bold py-2 px-4 rounded" >Upgrade Now</button>
      </div>

      <div className='bg-[#0D0D0D] gap-[20px]  rounded-[20px] pt-[10px] mt-[10px] sm:w-[1000px] md:w-[450px]' >
        <GrNodes color='#9BB1FF' size={35}  />
        <h5 className='font-staatliches ml-[20px] text-[#BFD7FF] text-[35px]' >Enterprise</h5>
        <h1 className='text-[#E2FDFF] ml-[20px] font-staatliches text-[32px] sm:text-[40px] md:text-[48px]' >Custom</h1>
        <div className='pt-[15px] pl-[20px] flex-row gap-[20px]' >
        <div className='flex items-center space-x-2 ' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >Tailored Solution</p>
        </div>
        <div className='flex items-center space-x-2' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >Dedicated Support</p>
        </div>
        <div className='flex items-center space-x-2' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >White-label</p>
        </div>
        <div className='flex items-center space-x-2' >
        <TiTick color='#BFD7FF' />
        <p className='text-[#BFD7FF]' >API Integrations</p>
        </div>
        </div>
        <button className="ml-[60px] sm:ml-[100px] mb-[20px] mt-[40px] mb-[10px] bg-[#5465FF] hover:bg-blue-700 text-white h-[40px] w-[200px] sm:w-[800px] md:w-[200px] font-bold py-2 px-4 rounded" >Contact Us</button>
      </div>

    </div>
  )
}

export default Pricing