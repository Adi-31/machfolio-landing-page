import { useEffect } from "react"
import Login1 from "../sections/Login1"
import Login2 from "../sections/Login2"
import Login3 from "../sections/Login3"
import LoginFooter from "../sections/LoginFooter"


function Login() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
     <Login1 />
     <Login2 />
     <Login3 />
     <LoginFooter />
     
    </>
  )
}

export default Login