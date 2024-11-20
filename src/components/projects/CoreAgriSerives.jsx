import image_1 from "/assets/service_type_1.png";
import image_2 from "/assets/service_type_2.png";
import image_3 from "/assets/service_type_3.png";
import { Link } from "react-router-dom";

const CoreAgriSerives = () => {
  return (
    <div className="w-full h-full px-16 py-28 bg-white flex flex-col justify-start items-start gap-20">
      <div className="h-44 flex flex-col justify-start items-start gap-4">
        <div className="flex justify-start items-center">
          <div className="text-black text-base font-semibold leading-6">
            Services
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="text-black text-4xl font-bold leading-tight break-words">
            Explore Our Core Agricultural Services
          </div>
          <div className="text-black text-lg font-normal leading-7 break-words">
            At Aqua Agro Farmtech, we specialize in innovative agricultural
            solutions. Our services are designed to enhance productivity and
            sustainability in farming.
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-8">
        {/* Card 1 */}
        <div className="w-full md:w-[400px] bg-white rounded-xl border border-gray-400 flex flex-col justify-start items-start">
          <img
            className="w-full h-[233px] rounded-t-xl"
            src={image_1}
            alt="Polyhouse Solutions"
          />
          <div className="w-full p-4 md:p-8 flex flex-col justify-center items-start gap-4 md:gap-6">
            <div className="text-black text-xl md:text-2xl font-bold leading-tight">
              Polyhouse Solutions
            </div>
            <div className="text-black text-sm md:text-lg font-normal leading-5 md:leading-6">
              Revolutionizing agriculture with top-tier polyhouse structures.
            </div>
            <Link to={`/pages/polyhouse`}>
              <div className="w-fit mt-4 py-1 px-2 rounded-lg border border-[#ffcc80] flex justify-start items-center gap-1 text-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="text-base font-normal font-['Roboto']">
                  Details
                </span>
                <span>{`>`}</span> {/* Right Arrow */}
              </div>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-[400px] bg-white rounded-xl border border-gray-400 flex flex-col justify-start items-start">
          <img
            className="w-full h-[233px] rounded-t-xl"
            src={image_2}
            alt="Irrigation Systems"
          />
          <div className="w-full p-4 md:p-8 flex flex-col justify-center items-start gap-4 md:gap-6">
            <div className="text-black text-xl md:text-2xl font-bold leading-tight">
              Irrigation Systems
            </div>
            <div className="text-black text-sm md:text-lg font-normal leading-5 md:leading-6">
              Maximizing growth with precision irrigation solutions.
            </div>
            <Link to={`/pages/irrigation`}>
              <div className="w-fit mt-4 py-1 px-2 rounded-lg border border-[#ffcc80] flex justify-start items-center gap-1 text-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="text-base font-normal font-['Roboto']">
                  Details
                </span>
                <span>{`>`}</span> {/* Right Arrow */}
              </div>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-[400px] bg-white rounded-xl border border-gray-400 flex flex-col justify-start items-start">
          <img
            className="w-full h-[233px] rounded-t-xl"
            src={image_3}
            alt="Landscaping"
          />
          <div className="w-full p-4 md:p-8 flex flex-col justify-center items-start gap-4 md:gap-6">
            <div className="text-black text-xl md:text-2xl font-bold leading-tight">
              Landscaping
            </div>
            <div className="text-black text-sm md:text-lg font-normal leading-5 md:leading-6">
              Transforming spaces with expert landscaping craftsmanship.
            </div>
            <Link to={`/pages/landscaping`}>
              <div className="w-fit mt-4 py-1 px-2 rounded-lg border border-[#ffcc80] flex justify-start items-center gap-1 text-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="text-base font-normal font-['Roboto']">
                  Details
                </span>
                <span>{`>`}</span> {/* Right Arrow */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreAgriSerives;
