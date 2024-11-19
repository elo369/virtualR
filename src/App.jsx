import FeatureSection from "./components/FeatureSection.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Workflow from "./components/Workflow.jsx";

const App =() =>{
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    <FeatureSection/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </div>
    </>
  )
}

export default App