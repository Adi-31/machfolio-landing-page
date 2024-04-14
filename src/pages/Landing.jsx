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

  useEffect(() => {
    // Check if the URL contains the hash
    const hash = window.location.hash;
    if (hash) {
      // Scroll to the element with the corresponding ID
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
     <Hero />
     <About />
     <section id="features"><Features /></section>
     <section id="pricing"><Pricing /></section>
     <GetStarted />
     <section id="footer"><Footer /></section>
    </>
  )
}

export default Landing