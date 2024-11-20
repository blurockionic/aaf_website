import img2 from "@assets/gallery_2.png";
import img3 from "@assets/gallery_3.png";
import img4 from "@assets/gallery_4.png";
const ProjectGallery = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 md:mt-16">
        <h6 className="text-sm text-black">Gallery</h6>
        <h1 className="text-4xl text-black font-bold">Our Amazing Projects</h1>
        <p className="text-[#FF9800] mt-4">
          Showcasing the Excellence of Our Work
        </p>
      </div>
      {/* table image grid */}
      <div className="container mx-auto px-5 py-5 lg:px-32 lg:pt-24 mt-10 md:mt-5">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img3}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img2}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img4}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img3}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img4}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5">
        <button className="bg-[#B5651D] text-white px-3 py-2 md:px-4 md:py-3 rounded-md ">View More</button>
      </div>
    </>
  );
};

export default ProjectGallery;
