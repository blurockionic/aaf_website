import img8 from "/assets/landscaping_image_8.png";

const InnovativeSection = () => {
  return (
    <div className="w-full h-auto px-4 md:px-16 py-10 md:py-10 bg-[#f5f5dc] flex flex-col justify-start items-center gap-20">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-12 w-full">
        {/* Wrapper for both text and image to take equal space */}
        <div className="flex flex-col sm:flex-row-reverse flex-1 gap-4">
          {/* Image Section */}
          <img
            className="w-full h-[400px] rounded-2xl mb-6 sm:mb-0 sm:w-1/2"
            src={img8}
            alt="Polyhouse Solutions"
          />

          {/* Text Section */}
          <div className="flex-1 flex  flex-col mt-6 gap-8 justify-center items-center my-auto">
            <div className="flex flex-col justify-start items-start gap-4">
              <h1 className="text-black text-3xl sm:text-4xl font-bold font-['Merriweather Sans'] leading-tight">
                Innovative Landscaping Solutions for Sustainable Environments
              </h1>
              <p className="text-black text-lg font-normal font-['Roboto'] leading-relaxed">
                At Aqua Agro, we are committed to enhancing outdoor spaces
                through innovative landscaping services. Our mission is to
                deliver sustainable solutions that elevate the aesthetic and
                functionality of your landscape.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-start gap-4  mr-7">
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-black text-xl font-bold font-['Roboto'] leading-7">
                  Our Vision
                </h2>
                <p className="text-black text-base font-medium font-['Merriweather Sans'] leading-normal">
                  To be a leader in innovative landscape design and sustainable
                  outdoor practices.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-black text-xl font-bold font-['Roboto'] leading-7">
                  Our Mission
                </h2>
                <p className="text-black text-base font-medium font-['Merriweather Sans'] leading-normal">
                  Empowering property owners with beautifully crafted landscapes
                  to promote environmental health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeSection;
