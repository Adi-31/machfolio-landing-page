import { useEffect } from "react"
import About from "../sections/About"
import Features from "../sections/Features"
import Footer from "../sections/Footer"
import GetStarted from "../sections/GetStarted"
import Hero from "../sections/Hero"
import Pricing from "../sections/Pricing"

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <Hero />
     <About />
     <Features />
     <Pricing />
     <GetStarted />
     <Footer />
    </>
  )
}

export default Landing