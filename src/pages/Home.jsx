import AboutSectionMain from "../components/home/AboutSectionMain"
import HeroSection from "../components/home/HeroSection"
import OurAccessariesSection from "../components/home/OurAccessariesSection"
import OurProjectSection from "../components/home/OurProjectSection"
import OurServiceMain from "../components/home/OurServiceMain"
import Testimonials from "../components/home/Testimonials"

const Home = () => {
  return (
    <>
    {/* herosection  */}
    <HeroSection/>

    {/* about section  */}
    <AboutSectionMain />

    {/* our service sections  */}
    <OurServiceMain/>

    {/* our ptoject section  */}
    <OurProjectSection />

    {/* our accessories  */}
    <OurAccessariesSection />

    {/* testimonials  */}
    <Testimonials/>

  </>
  )
}

export default Home