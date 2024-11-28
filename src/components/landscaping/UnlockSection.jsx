import img9 from "/assets/landscaping_image_9.png";
import check from "/assets/icon/check-badge.png";

const UnlockSection = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-16 py-10 bg-[#f5f5dc] flex flex-col gap-12">
      <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-12 ">
        <div className="flex flex-col my-auto justify-center items-center gap-8 md:w-1/2">
          <h2 className="text-black text-2xl md:text-4xl font-bold leading-tight">
            Unlock the Full Potential of Your Outdoor Spaces
          </h2>
          <p className="text-black text-lg md:text-xl leading-relaxed font-['roboto']">
            Our innovative landscaping services ensure aesthetically pleasing
            and functional outdoor environments, promoting sustainability and
            efficient resource use. Experience the benefits of expert
            landscaping tailored to your space’s needs.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={check} className="w-5 h-5  " />
              <p className="text-black text-lg md:text-xl leading-[27px] font-['roboto']">
                Maximized beauty and functionality through tailored landscape
                design..
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src={check} className="w-5 h-5  " />
              <p className="text-black text-lg md:text-xl leading-[27px] font-['roboto']">
                Protection against soil erosion and effective use of water
                resources.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src={check} className="w-5 h-5  " />
              <p className="text-black text-lg md:text-xl leading-[27px] font-['roboto']">
                Sustainable landscaping practices that enhance environmental
                health.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          {" "}
          {/* Centering the image on medium screens */}
          <img
            className="w-full h-[450px] rounded-2xl"
            src={img9}
            alt="Polyhouse example"
          />
        </div>
      </div>
    </div>
  );
};

export default UnlockSection;
