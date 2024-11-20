import { useState, useEffect } from "react";
import Pragat from "@public/assets/images/HomePage/Pragat.jpg";
import Sumandeep from "@public/assets/images/HomePage/Sumandeep.jpg";
import Chetan from "@public/assets/images/HomePage/Chetan.jpg";
import Himanshu from "@public/assets/images/HomePage/Himanshu.jpg";
import MananGarg from "@public/assets/images/HomePage/MananGarg.jpg";
import Image from "next/image";

const API_ID= process.env.UPLOADTHING_APP_ID;
const testimonials = [
  {
    name: "Sumandeep",
    position: "",
    img:  `https://utfs.io/a/${API_ID}/J3qszI0odXYGEK9IGTWW8w6KUftDiSHblsQZhLPENdkrgB4C`,
    text: "I like the Ambience and working style of Abroad Educares.I am delighted that with the help of Abroad Educares I got my Work visa for New Zealand in very short time. All the staff members are really helpful and they responded very quickly every time I had any query related to my status of Application. So all in all, it was a great experience for me throughout the journey.",
  },
  {
    name: "Himanshu",
    position: "Student",
    img: `https://utfs.io/a/${API_ID}/J3qszI0odXYG80JeEcboke7Ft4PLCNHqawsBrEKiDzQ6cYWd`,
    text: "I don't have words to thank the entire team of Abroad Educares for providing excellent services and helping me achieve my dreams of studying in Australia. I was nervous initially because I didn't know anything about the immigration process, but Abroad Educares guided me well and showed me the right path.",
  },
  {
    name: "Chetan Bhatnagar",
    img:  `https://utfs.io/a/${API_ID}/J3qszI0odXYGGaFeYW1MVczW4eR2SQfyN8bjvrACH3lYi90P`,
    position: "Student",
    text: "I am really happy and excited to recommend Abroad Educares for helping me get my study visa for Australia. They provide detailed information on the immigration process, which built my trust in them. Thanks to their expertise, I got my visa.",
  },
  {
    name: "Manan Garg",
    img: `https://utfs.io/a/${API_ID}/J3qszI0odXYGUlj9x7Q5hIN6OqPVkXzYGJTg7AsW13vESBlj`,
    position: "Student",
    text: "Thanks to Abroad Educares for providing excellent services and answering all our queries at all hours. I strongly recommend their services if you're planning to study abroad. Their support is outstanding.",
  },
  {
    name: "Pargat Singh",
    img:  `https://utfs.io/a/${API_ID}/J3qszI0odXYGSb66IfybZUj9gvcz4uiTJAeCmpKPWL2H3NfF`,
    position: "",
    text: "I highly recommend Abroad Educares as they are one of the best in the business. They provided great guidance for my New Zealand work visa, and their experienced consultants made the process easy and understandable. Thanks to the entire team!",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide automatically
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]);

  return (
    <>
      {/* Container for slides */}
      <div className="relative max-w-3xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${testimonials.length * 100}%` }}
        >
          {testimonials.map((testimonial, index) => (
            <div className="w-full flex-shrink-0" key={index}>
              <div className="flex gap-5 items-center">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-[5rem] h-[5rem] rounded-full"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl text-blue-700">{testimonial.name}</h3>
                  <p className="text-sm font-normal opacity-60 text-gray-800">{testimonial.position}</p>
                </div>
              </div>

              {/* Updated container for paragraph text */}
              <div className="mt-4 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-lg">
                <p className="text-sm font-normal text-gray-800 text-wrap break-word">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-10 lg:mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)} // Clicking dot navigates to specific slide
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default TestimonialCarousel;