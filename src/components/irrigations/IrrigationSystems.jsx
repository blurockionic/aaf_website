import img1 from "/assets/img1.png";
import img2 from "/assets/ne11.jpg";
import img3 from "/assets/img7.png";
import img4 from "/assets/img5.png";
import img5 from "/assets/img6.png";
import img6 from "/assets/img4.png";
import img7 from "/assets/img7.png";

const IrrigationSystems = () => {
  return (
    <div className="w-full min-h-screen px-4 md:px-16 py-10 md:py-10 bg-white flex flex-col gap-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 sm:grid-cols-10 gap-8">
        {/* Image Section for Mobile */}
        <div className="sm:col-span-4 mb-6 w-[90vw] sm:w-[auto] sm:mb-0 relative order-1 sm:order-2">
          <img
            className="w-full sm:h-full rounded-[32px] object-fill"
            src={img1}
            alt="Polyhouse Solutions"
          />
        </div>

        {/* Text Section */}
        <div className="col-span-6 flex flex-col gap-6 order-2 sm:order-1">
          <h1 className="text-black text-4xl sm:text-5xl font-bold font-['Merriweather Sans'] leading-tight">
            <span className="text-[#1C84FA]">Irrigation Systems</span> that
            <br />
            Transform Your Landscape
          </h1>
          <p className="text-black text-base sm:text-lg font-normal font-['Roboto'] leading-relaxed">
            Experience the future of farming with our advanced irrigation
            systems designed for optimal efficiency.
          </p>
        </div>
      </div>

      {/* Main img Grid for Desktop Only */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-10 gap-8">
        <img
          className="col-span-2 w-full h-[540px] rounded-[40px] object-cover"
          src={img2}
          alt="Polyhouse Solution img 1"
        />
        <img
          className="col-span-5 w-full h-[540px] rounded-[32px] object-cover"
          src={img3}
          alt="Polyhouse Solution img 2"
        />
        <img
          className="col-span-3 w-full h-[540px] rounded-[32px] object-cover"
          src={img4}
          alt="Polyhouse Solution img 3"
        />
      </div>

      {/* Mobile img Grid */}
      <div className="grid grid-cols-2 gap-4 sm:hidden">
        <img
          className="w-full h-[270px] rounded-[40px] object-cover"
          src={img2}
          alt="Polyhouse Solution img 1"
        />
        <img
          className="w-full h-[270px] rounded-[40px] object-cover"
          src={img4}
          alt="Polyhouse Solution img 2"
        />
        <img
          className="col-span-2 w-full h-[540px] rounded-[32px] object-cover"
          src={img3}
          alt="Polyhouse Solution img 3"
        />
        <img
          className="col-span-1 w-full h-[270px] rounded-[32px] object-cover"
          src={img6}
          alt="Additional Polyhouse img 2"
        />
        <img
          className="col-span-1 w-full h-[270px] rounded-[32px] object-cover"
          src={img7}
          alt="Additional Polyhouse img 3"
        />
      </div>

      {/* Footer img Grid (Desktop Only) */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-10 gap-8">
        <div className="relative col-span-5">
          <img
            className="w-full h-[270px] rounded-[32px] object-cover"
            src={img5}
            alt="Additional Polyhouse img 1"
          />
        </div>
        <div className="relative col-span-3">
          <img
            className="w-full h-[270px] rounded-[32px] object-cover"
            src={img6}
            alt="Additional Polyhouse img 2"
          />
        </div>
        <div className="relative col-span-2">
          <img
            className="w-full h-[270px] rounded-tl-2xl rounded-tr-2xl object-cover"
            src={img7}
            alt="Additional Polyhouse img 3"
          />
        </div>
      </div>
    </div>
  );
};

export default IrrigationSystems;
