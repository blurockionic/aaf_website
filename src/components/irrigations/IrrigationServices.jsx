import img1 from "/assets/icon/icon1.png";
import img2 from "/assets/icon/icon2.png";
import img3 from "/assets/icon/icon3.png";

const IrrigationServices = () => {
  return (
    <div className="px-4 sm:px-6 md:px-16 py-10 bg-white flex flex-col">
      {/* Header Section */}
      <h2 className="text-black text-sm sm:text-base md:text-md font-bold leading-tight">
        Innovation
      </h2>

      {/* Title and Description Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-start md:justify-center md:items-center">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold leading-tight flex flex-col md:w-1/2 gap-3 text-left">
          <span>Explore Our</span>
          <span>Comprehensive</span>
          <span>
            <span className="text-[#1C84FA]">Irrigation</span> Services
          </span>
        </h1>
        <p className="text-black text-base sm:text-lg leading-relaxed md:w-1/2  md:text-left font-['roboto']">
          At Polyhouse, we specialize in creating customized polyhouse solutions
          tailored to your agricultural needs. Our services encompass
          construction, maintenance, and expert consultancy, ensuring your crops
          thrive in a controlled environment. Experience the benefits of
          advanced technology and sustainable practices with our dedicated team.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10 md:my-16">
        {/* Service 1 */}
        <div className="flex flex-col">
          <img
            className="w-12 h-12 mb-5 mx-auto md:mx-0"
            src={img3}
            alt="Service 1"
          />
          <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold leading-tight text-center md:text-left">
            Expert Irrigation System Design and Installation
          </h3>
          <p className="text-black text-sm sm:text-base md:text-lg leading-normal text-center md:text-left font-['roboto']">
            We install efficient irrigation systems to boost your crop
            productivity.
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col">
          <img
            className="w-12 h-12 mb-5 mx-auto md:mx-0"
            src={img2}
            alt="Service 2"
          />
          <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold leading-tight text-center md:text-left">
            Reliable Maintenance for Maximum Efficiency
          </h3>
          <p className="text-black text-sm sm:text-base md:text-lg leading-normal text-center md:text-left font-['roboto']">
            Our maintenance services ensure your system runs smoothly at all
            times.
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col">
          <img
            className="w-12 h-12 mb-5 mx-auto md:mx-0"
            src={img1}
            alt="Service 3"
          />
          <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold leading-tight text-center md:text-left">
            Expert Agricultural Consultation
          </h3>
          <p className="text-black text-sm sm:text-base md:text-lg leading-normal text-center md:text-left font-['roboto']">
            Receive expert guidance tailored to your unique agricultural needs.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="flex justify-center md:justify-start">
        <button className="px-6 py-3 bg-[#b5651d] text-white rounded-lg border border-[#4caf50] transition duration-200 hover:bg-[#a65e1a] focus:outline-none focus:ring-2 focus:ring-[#4caf50]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default IrrigationServices;
