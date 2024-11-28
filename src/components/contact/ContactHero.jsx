import Heroimg from "/assets/Hero.jpg";

const ContactHero = () => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      <img
        className="w-full h-full object-cover opacity-70"
        src={Heroimg}
        alt="Hero Image"
      />
      <div className="absolute inset-0 flex justify-center md:justify-start items-center">
        <div className="text-[#FF9800] text-4xl md:text-5xl lg:text-6xl font-bold font-['Merriweather Sans'] leading-tight md:leading-[58px] lg:leading-[67.2px] text-center md:text-left px-4 md:px-12">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
