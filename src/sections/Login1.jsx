import React from 'react'

const Login1 = () => {
  return (
<div className="h-screen relative overflow-hidden">
      {/* Black background */}
      <div className="absolute inset-0 bg-black z-10"></div>
      {/* Gray semicircular structure */}
       <div className="absolute left-0 top-0 h-full w-[400px] sm:w-[600px] md:w-[800px] bg-[#393E63] rounded-r-full z-20"></div>{/*{#788BFF} */}
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-30">
        <h1 className="font-staatliches text-6xl sm:text-7xl text-[#F0F5F7] ">Welcome to the Login Gateway</h1>
        <p className="mt-[20px] sm:mt-[30px] w--[200px] sm:w--[650px] md:w-[800px] text-[#A6E1FA] text-[20px] " >Embark on a journey of seamless authentication with our multiple login options. Say goodbye to tedious sign-up forms and password amnesia! Experience the magic of one-click logins through your favorite services such as Google. Granting access has never been this easy and secure!</p>
      </div>
    </div>
  )
}

export default Login1