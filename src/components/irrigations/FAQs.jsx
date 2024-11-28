import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// FAQs Section Component
const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is an irrigation system?",
      answer:
        "An irrigation system is a method of delivering water to crops in a controlled manner, ensuring that plants receive adequate moisture for optimal growth. It helps distribute water evenly, reducing wastage and promoting healthier plants.",
    },
    {
      question: "How does it work?",
      answer:
        "Irrigation systems use pipes, valves, and sprinklers or drip lines to direct water to crops. Sensors and automated controls can be added to monitor soil moisture and adjust water flow, optimizing water usage and minimizing waste.",
    },
    {
      question: "What are the benefits?",
      answer:
        "Irrigation systems provide consistent water supply, leading to improved crop yields and healthier plants. They reduce water wastage, lower labor costs, and can be tailored to specific crop needs, promoting sustainable farming practices.",
    },
    {
      question: "Are they cost-effective?",
      answer:
        "Yes, irrigation systems are cost-effective in the long run. Though there’s an initial setup cost, the increase in crop yield, efficient water use, and labor savings provide a quick return on investment.",
    },
    {
      question: "How long do they last?",
      answer:
        "With proper maintenance, irrigation systems can last 10 to 20 years. Regular checks, timely repairs, and quality materials ensure durability and prolonged lifespan.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-16 py-10 bg-white flex flex-col gap-20">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-bold text-black mb-4 ">FAQs</h1>
        <p className="text-lg text-black font-['roboto']">
          Find answers to your most common questions about our Polyhouse
          services.
        </p>
      </div>
      <div className="border-t border-black pt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-black py-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span
                className="text-lg font-semibold text-black font-['
Merriweather Sans']"
              >
                {faq.question}
              </span>
              <div className="w-8 h-8 relative flex justify-center items-center">
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-black" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-black" />
                )}
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-3">
                <p
                  className="text-base text-black font-['
Merriweather Sans']"
                >
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start">
        <h2
          className="text-2xl font-bold text-black mb-2 font-['
Merriweather-Sans']"
        >
          Still have questions?
        </h2>
        <p className="text-lg text-black">We&apos;re here to help!</p>
        <div className="mt-4">
          <button className="bg-[#B5651D] text-white py-2 px-4 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
