import img1 from "/assets/image_1.svg";
import img2 from "/assets/image_2.svg";
import img3 from "/assets/image_3.svg";

const ExploreSection = () => {
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
            <span className="text-green-500">Landscaping</span> Services
          </span>
        </h1>
        <p className="text-black text-base sm:text-lg leading-relaxed md:w-1/2  md:text-left font-['roboto']">
          At Aqua Agro, we specialize in delivering customized landscaping
          solutions tailored to meet your specific needs. Our services include
          design, installation, regular maintenance, and expert consultation,
          ensuring your outdoor spaces are both beautiful and sustainable.
          Harness the power of modern landscaping techniques and sustainable
          practices with our dedicated team.
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
            Expert Landscape Design and Installation
          </h3>
          <p className="text-black text-sm sm:text-base md:text-lg leading-normal text-center md:text-left font-['roboto']">
            We design and install stunning landscapes that enhance the natural
            beauty of your outdoor spaces.
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
            Reliable Maintenance for Long-lasting Beauty
          </h3>
          <p className="text-black text-sm sm:text-base md:text-lg leading-normal text-center md:text-left font-['roboto']">
            Our maintenance services ensure your landscape remains vibrant and
            functional all year long.
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
            Expert Consultation for Your Landscaping Success
          </h3>
          <p className="text-black text-sm sm:text-base md:text-lg leading-normal text-center md:text-left font-['roboto']">
            Receive expert guidance tailored to your unique landscaping needs.
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

export default ExploreSection;
