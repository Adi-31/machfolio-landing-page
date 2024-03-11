import { GoogleLogout, googleLogout } from "react-google-login";

const clientId = "882103023815-pm25g92hsnikblo2a04n368341gl09n5.apps.googleusercontent.com";

function LogoutButton() {
    
    const onSuccess = () => {
    console.log("Log out Succesfull!");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Signout with Google"}
                onLogoutSuccess={onSuccess}
                />
        </div>
    )
}

export default LogoutButton