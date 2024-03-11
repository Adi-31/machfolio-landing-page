import { GoogleLogin } from "react-google-login";

const clientId = "882103023815-pm25g92hsnikblo2a04n368341gl09n5.apps.googleusercontent.com";

function LoginButton() {
    
    const onSuccess = (res) => {
        console.log("Login success! current user:",res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! res: ", res);
    }

    return(
    <div id="signInButton">
        <GoogleLogin
            clientId={clientId}
            buttonText="Signin with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
    </div>
    )
}

export default LoginButton