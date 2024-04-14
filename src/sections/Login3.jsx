import React, { useState, useEffect } from 'react';

import { gapi } from 'gapi-script';
import LoginButton from './LoginButton';  

// const useCustomNavigation = () => {
//   const navigate = useNavigate();

//   const redirectToDashboard = () => {
//     navigate('/dashb');
//   };

//   return {
//     redirectToDashboard,
//     // Other navigation functions
//   };
// };

const clientId = "882103023815-pm25g92hsnikblo2a04n368341gl09n5.apps.googleusercontent.com";

const Login3 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const history = useHistory(); // Initialize useHistory
  // const { redirectToDashboard } = useCustomNavigation();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      }).then(() => {
        const isUserSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
        setIsLoggedIn(isUserSignedIn);
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    // Redirect to "/dashb" after successful login
    // redirectToDashboard();
    console.log("User logged in:", user);
  };

  const handleLogoutSuccess = () => {
    setIsLoggedIn(false);
    //logout data to be saved
    console.log("User logged out");
  };

  return (
    <div className='bg-[#000000] flex items-center flex-col justify-center pt-[50px] pl-[20px] pr-[20px] h-[500px] sm:pb-[50px]'>
      <h1 className='font-staatliches text-[28px] sm:text-[38px] md:text-[48px] w-[500px] sm:w-[700px] md:w-[1020px] mb-[20px] md:text-[60px] text-[#A6E1FA]'>Ready to dive into the realm of convenience? Choose your path now!</h1>
      <div className='ml-[60px] sm:ml-[20px]'>
        <LoginButton 
          isLoggedIn={isLoggedIn}
          onSuccess={handleLoginSuccess} 
          onLogout={handleLogoutSuccess} 
        />
      </div>
    </div>
  );
};

export default Login3;