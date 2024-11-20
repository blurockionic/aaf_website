import img2 from '@assets/background.jpg';  

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-image-wrapper">
        <img 
          src={img2} 
          alt="Greenhouse" 
          className="hero-image" 
        />
      </div>
      <div className="hero-content py-10">
        <h1>Innovative Agriculture Solutions</h1>
        <p className='text-sm px-5'>Leading Punjab&apos;s Agro-tech revolution with 700+ successful projects</p>
      </div>
    </section>
  );
};

export default HeroSection;
