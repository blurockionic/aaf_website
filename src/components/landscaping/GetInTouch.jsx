import { Mail, Phone, MapPin } from "lucide-react";

const GetInTouch = () => {
  return (
    <div className="bg-[#F5F5DC] flex flex-col justify-start items-center">
      <div className="m-20 w-full max-w-7xl">
        <div className="bg-white p-10 rounded-lg shadow-md">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="text-black text-5xl font-bold font-['Merriweather Sans'] leading-tight">
              Contact us
            </h2>
            <p className="text-black text-lg font-normal font-['Roboto'] leading-[27px] mt-4">
              We welcome your inquiries, feel free to write to us.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Email Info */}
            <div className="flex flex-col items-center text-center">
              <Mail className="text-[#ff9800] w-12 h-12 mb-4" />
              <div className="text-[#ff9800] text-[32px] font-bold font-['Merriweather Sans']">
                Email
              </div>
              <p className="text-black text-base font-bold font-['Roboto']">
                aquaagrofarmtech@gmail.com
              </p>
            </div>

            {/* Phone Info */}
            <div className="flex flex-col items-center text-center">
              <Phone className="text-[#ff9800] w-12 h-12 mb-4" />
              <div className="text-[#ff9800] text-[32px] font-bold font-['Merriweather Sans']">
                Phone
              </div>
              <p className="text-black text-base font-bold font-['Roboto']">
                +919878106932
              </p>
            </div>

            {/* Office Info */}
            <div className="flex flex-col items-center text-center">
              <MapPin className="text-[#ff9800] w-12 h-12 mb-4" />
              <div className="text-[#ff9800] text-[32px] font-bold font-['Merriweather Sans']">
                Office
              </div>
              <p className="text-black text-base font-bold font-['Roboto']">
                Ludhiana, Punjab, 141006
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
