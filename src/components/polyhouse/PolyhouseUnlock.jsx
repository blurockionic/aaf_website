import img6 from "/assets/polyhouse/img7.jpg";
import check from "/assets/icon/check-badge.png";

const PolyhouseUnlock = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-16 py-10 bg-[#f5f5dc] flex flex-col gap-12">
      <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-12 ">
        <div className="flex flex-col my-auto justify-center items-center gap-8 md:w-1/2">
          <h2 className="text-black text-2xl md:text-4xl font-bold leading-tight">
            Unlock the Potential of Your Crops with Our Innovative Polyhouse
            Solutions
          </h2>
          <p className="text-black text-lg md:text-xl leading-relaxed font-['roboto']">
            Our polyhouse solutions provide an optimal environment for crops,
            enhancing growth and yield. Experience the benefits of controlled
            climate agriculture that adapts to your farming needs.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={check} className="w-5 h-5  " />
              <p className="text-black text-lg md:text-xl leading-[27px] font-['roboto']">
                Maximized crop yield through climate control technology.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src={check} className="w-5 h-5  " />
              <p className="text-black text-lg md:text-xl leading-[27px] font-['roboto']">
                Protection against pests and harsh weather conditions.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src={check} className="w-5 h-5  " />
              <p className="text-black text-lg md:text-xl leading-[27px] font-['roboto']">
                Sustainable farming practices that promote environmental health.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[450px] flex justify-center">
          {" "}
          {/* Centering the image on medium screens */}
          <img
            className="w-full h-auto rounded-2xl"
            src={img6}
            alt="Polyhouse example"
          />
        </div>
      </div>
    </div>
  );
};

export default PolyhouseUnlock;
