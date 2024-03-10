import React from 'react'

const Features = () => {
  return (
    <div id="features" className='bg-[#9BB1FF] text-white h-[1000px] sm:h-screen w-full flex items-center justify-center flex-col sm:flex-row gap-[50px] p-[20px] sm:p-[30px] md:p-40px sm:pl-[70px] md:pl-[100px]'>
      <div>
      <img src="src\assets\graph.jpg" alt="graph" className="object-cover w-[300px] sm:w-[350px] md:w-[450px] h-[300px] sm:h-[350px] md:h-[450px] rounded-[20px] sm:rounded-[30px] md:rounded-[40px]" />
      <h1 className="font-staatliches text-[32px] text-black ">STOCK MARKET MASTERY</h1>
      <p className="font-spacegrotesk text-[16px] text-black sm:w-[300px] " >Explore curated stock market icons and visualize your journey to financial prosperity with MachFolio.</p>
      </div>
      <div>
      <img src="src\assets\phone stock.jpg" alt="phone stock " className="object-cover w-[300px] sm:w-[350px] md:w-[450px] h-[300px] sm:h-[350px] md:h-[450px] rounded-[20px] sm:rounded-[30px] md:rounded-[40px]" />
      <h1 className="font-staatliches text-[32px] text-black " >STELLAR SHADES</h1>
      <p className="font-spacegrotesk text-[16px] text-black sm:w-[300px]">Dive into the cosmic depths of dark blue and purple hues, creating a playful and futuristic ambiance for your financial ride.</p>
    </div>
    </div>
  )
}

export default Features