import ServicesExplore from "../components/services/ServicesExplore";
import ServicesHero from "../components/services/ServicesHero";
import ServicesIrrigation from "../components/services/ServicesIrrigation";
import ServicesLandscaping from "../components/services/ServicesLandscaping";
import ServicesPolyhouse from "../components/services/ServicesPolyhouse";
import Testimonials from "../components/home/Testimonials";

const Services = () => {
  return (
    <>
      {/* Hero */}
      <ServicesHero />

      {/* Explore */}
      <ServicesExplore />

      {/* Details Polyhouse*/}
      <ServicesPolyhouse />

      {/* Details Irrigation*/}
      <ServicesIrrigation />

      {/* Details Landscaping*/}
      <ServicesLandscaping />

      {/* testimonials  */}
      <Testimonials />
    </>
  );
};

export default Services;
