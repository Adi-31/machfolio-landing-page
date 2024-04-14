import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';

const clientId = "882103023815-pm25g92hsnikblo2a04n368341gl09n5.apps.googleusercontent.com";

function LoginButton({ isLoggedIn, onSuccess, onLogout }) {

    const handleSuccess = (res) => {
        onSuccess(res.profileObj); // Call the parent component's onSuccess callback with user data
    }

    const handleFailure = (res) => {
        console.log("Login Failed! res: ", res);
    }

    return (
        <div id="signInButton" >
            {isLoggedIn ? (
                <div className='flex  flex-row gap-20'>
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Signout"
                    onLogoutSuccess={onLogout}
                />
                <Link to="/dashb"> <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Go to Dashboard
</button></Link></div>

            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
    )
}

export default LoginButton;
