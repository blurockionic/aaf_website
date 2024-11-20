import { Link } from "react-router-dom";
import Explore2 from "/assets/11.jpg";
import Explore1 from "/assets/Explore2.png";
import Explore3 from "/assets/Explore3.png";

const ServicesExplore = () => {
  return (
    <div className="w-full min-h-screen px-6 sm:px-16 py-28 bg-[#f5f5dc] flex flex-col justify-start items-start gap-20">
      {/* Section Header */}
      <div className="flex flex-col gap-4">
        <div className="text-black text-base font-semibold font-['Roboto']">
          Services
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-black text-5xl font-bold font-['Merriweather Sans'] leading-tight">
            Explore Our Core Agricultural Services
          </h2>
          <p className="text-black text-lg font-normal font-['Roboto']">
            At Aqua Agro Farmtech, we specialize in innovative agricultural
            solutions. Our services are designed to enhance productivity and
            sustainability in farming.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full flex flex-wrap gap-8 justify-center">
        {/* Polyhouse Solutions Card */}
        <ServiceCard
          image={Explore1}
          altText="Polyhouse Solutions"
          title="Polyhouse Solutions"
          description="Revolutionizing agriculture with top-tier polyhouse structures."
          linkTo="/pages/polyhouse"
        />

        {/* Irrigation Systems Card */}
        <ServiceCard
          image={Explore2}
          altText="Irrigation Systems"
          title="Irrigation Systems"
          description="Maximizing growth with precision irrigation solutions."
          linkTo="/pages/irrigation"
        />

        {/* Landscaping Card */}
        <ServiceCard
          image={Explore3}
          altText="Landscaping"
          title="Landscaping"
          description="Transforming spaces with expert landscaping craftsmanship."
          linkTo="/pages/landscaping"
        />
      </div>
    </div>
  );
};

// Reusable ServiceCard Component
const ServiceCard = ({ image, altText, title, description, linkTo }) => (
  <div className="w-[411px] bg-white rounded-2xl border border-[#aaaaaa] flex flex-col">
    <img
      className="w-full h-[233px] rounded-t-2xl"
      src={image}
      alt={altText}
    />
    <div className="p-8 flex flex-col justify-between flex-grow">
      <div className="flex flex-col gap-4">
        <h3 className="text-black text-[32px] font-bold font-['Merriweather Sans']">
          {title}
        </h3>
        <p className="text-black text-base font-normal font-['Merriweather Sans']">
          {description}
        </p>
      </div>
      {/* Standardized Button */}
      <Link to={linkTo}>
        <div className="w-fit mt-4 py-1 px-2 rounded-lg border border-[#ffcc80] flex justify-start items-center gap-1 text-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-all duration-300 cursor-pointer">
          <span className="text-base font-normal font-['Roboto']">Details</span>
          <span>{`>`}</span> {/* Right Arrow */}
        </div>
      </Link>
    </div>
  </div>
);

export default ServicesExplore;
