import img6 from "/assets/img6.png";
const IrrigationSolutions = () => {
  return (
    <div className="w-full h-auto px-4 md:px-16 py-10 md:py-10 bg-[#f5f5dc] flex flex-col justify-start items-center gap-20">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-12 w-full">
        {/* Wrapper for both text and image to take equal space */}
        <div className="flex flex-col sm:flex-row-reverse flex-1 gap-4">
          {/* Image Section */}
          <img
            className="w-full h-auto rounded-2xl mb-6 sm:mb-0 sm:w-1/2"
            src={img6}
            alt="Polyhouse Solutions"
          />

          {/* Text Section */}
          <div className="flex-1 flex flex-col mt-6 gap-8">
            <div className="flex flex-col justify-start items-start gap-4">
              <h1 className="text-black text-3xl sm:text-4xl font-bold font-['Merriweather Sans'] leading-tight">
                Innovative Irrigation Solutions for Sustainable Farming
              </h1>
              <p className="text-black text-lg font-normal font-['Roboto'] leading-relaxed">
                At Aqua Agro, we are committed to transforming agriculture
                through advanced irrigation systems. Our mission is to deliver
                state-of-the-art solutions that boost productivity while
                conserving resources.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-start gap-4  mr-7">
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-black text-xl font-bold font-['Roboto'] leading-7">
                  Our Vision
                </h2>
                <p className="text-black text-base font-medium font-['Merriweather Sans'] leading-normal">
                  To be a leader in innovative water management and sustainable
                  farming practices.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-black text-xl font-bold font-['Roboto'] leading-7">
                  Our Mission
                </h2>
                <p className="text-black text-base font-medium font-['Merriweather Sans'] leading-normal">
                  Empowering farmers with efficient irrigation technology for
                  improved yields and responsible water use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrrigationSolutions;
