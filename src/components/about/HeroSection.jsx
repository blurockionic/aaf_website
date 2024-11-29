import img2 from "/assets/polyhouse/img1.jpg";

const HeroSection = () => {
  return (
    <section className="relative hero h-[60vh] w-full">
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={img2}
          alt="Greenhouse"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative hero-content flex flex-col justify-center items-center text-white py-10 h-full">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white">
          Innovative Agriculture Solutions
        </h1>
        <p className="text-sm md:text-lg px-5 mt-4 text-center text-gray-200">
          Leading Punjab&apos;s Agro-tech revolution with 700+ successful
          projects
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
