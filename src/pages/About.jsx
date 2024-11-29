import AboutSection from "../components/about/AboutSection";
import DirectorInsight from "../components/about/DirectorInsight";
import HeroSection from "../components/about/HeroSection";
import Milestones from "../components/about/Milestones";
import MissionVision from "../components/about/MissionVision";
// import ServicesSection from "../components/about/ServicesSection";

const About = () => {
  return (
    <>
      <HeroSection />
      {/* <ServicesSection /> */}
      <AboutSection />
      <MissionVision />
      <DirectorInsight />
      <Milestones />
    </>
  );
};

export default About;
