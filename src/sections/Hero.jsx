import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-black text-white h-[600px] sm:h-screen w-full flex items-center justify-end flex-col gap-[50px] p-[20px]'>
        <h1 className='font-staatliches text-7xl sm:text-9xl md:text-[16.5rem] text-[#788BFF] absolute top-[245px] '>MACHFOLIO</h1>
        <div className='text-[26px] sm:text-[16px] flex flex-col sm:flex-row gap-[20px] text-[#788BFF] font-spaceGrotesk'>
            <p onClick={() => scrollToSection('features')}>Features</p>
            <p onClick={() => scrollToSection('pricing')}>Pricing</p>
            <p onClick={() => scrollToSection('footer')}>Contact</p>
        </div>
    </div>
  )
}

export default Hero