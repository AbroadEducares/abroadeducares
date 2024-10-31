import React from "react";
import students_writing from "@public/assets/images/AboutPage/students_writing.jpg";
import Link from "next/link";
import forex_stock from "@public/assets/images/AboutPage/forex_stock.jpg";
import smiley_students_library from "@public/assets/images/AboutPage/smiley_students_library.jpg";
import students_holding_map from "@public/assets/images/AboutPage/students_holding_map.jpg";
import woman_working_travel from "@public/assets/images/AboutPage/women_working_travel.jpg";
import gaurav_garg from "@public/assets/images/AboutPage/gaurav_garg.png";
import ceo2 from "@public/assets/images/AboutPage/ceo2.png";
import { FaAward, FaThumbsUp } from "react-icons/fa";

const page = () => {

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${students_writing.src})`, // If the image is imported
        }}
        className="bg-no-repeat relative bg-center bg-cover w-full h-[25rem] flex items-center justify-center"
      >
        {/* Black overlay with reduced opacity */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-55 z-0"></div>

        {/* Text content with increased z-index for visibility */}
        <div className="relative z-10 w-full flex flex-col  items-center gap-5 text-white">
          <h2 className="font-extrabold text-5xl md:text-6xl uppercase">
            About
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2 text-white">
              <li>
                <Link href="/" className=" hover:underline">
                  Home
                </Link>
              </li>
              <li className="">/</li>
              <li>
                <Link href="/About" className=" hover:underline">
                  About
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* what we are or who we are */}
      <section className="mt-10 py-10">
        <div className="flex flex-col-reverse lg:flex-row justify-center px-0 lg:px-4 xl:px-0">
          {/* Left div */}
          <div className="mt-10 lg:mt-0 ml-0 mr-5 lg:ml-14 w-full lg:w-[50%] flex items-center justify-center">
            {/* Wrapper */}
            <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row gap-4 mx-5 lg:mx-0">
              <div className="flex flex-col gap-4 items-center justify-center">
                {/* Two images */}
                <img
                  src={forex_stock.src}
                  alt="Passport"
                  className="w-[41rem] md:w-[28rem] h-[fit-content] lg:w-[17rem] lg:h-[17rem] object-left-top"
                  loading="lazy"
                />
                <img
                  src={smiley_students_library.src}
                  alt="Hat"
                  className="w-[41rem] md:w-[28rem] lg:w-[17rem] h-[17rem] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-4 items-center justify-center lg:mb-20 mb-0">
                {/* Two images */}
                <img
                  src={woman_working_travel.src}
                  alt="Passport"
                  className="w-[41rem] md:w-[28rem] h-[fit-content] lg:w-[17rem] lg:h-[17rem] object-cover"
                  loading="lazy"
                />
                <img
                  src={students_holding_map.src}
                  alt="Hat"
                  className="w-[41rem] md:w-[28rem] h-[fit-content] lg:w-[17rem] lg:h-[17rem] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right div */}
          <div className="lg:w-[50%] ml-5 max-w-6xl lg:px-0 flex flex-col lg:flex-col pr-3">
            <div className="px-2 sm:px-0 w-full">
              <h3 className="text-blue-700 uppercase font-regular text-md">
                Who We Are
              </h3>
              <div className="mt-4 flex gap-5">
                {/* White line */}
                <div className="w-[0.3rem] bg-blue-600"></div>
                <div className="w-full lg:w-[80%]">
                  <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
                    Expert Immigration Services
                  </h2>
                  <h2 className="font-black text-gray-800 lg:leading-none text-[2.2rem] lg:text-[2.6rem]">
                    From Professionals
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-6 lg:mt-10 gap-4 w-full  lg:pl-0 lg:w-[80%]">
              <p className="text-sm text-gray-800">
                Our organization closely monitors every change in immigration
                laws. With years of hands-on experience, we manage each case
                with precision and efficiency, ensuring smooth processes for our
                clients.
              </p>
              <p className="text-sm text-gray-800">
                Every situation is distinct, and we prioritize getting to know
                our clients to deliver personalized solutions. As licensed
                professionals, we are dedicated to expanding our knowledge
                through ongoing training and professional growth.
              </p>
            </div>
            <div className="w-full lg:w-[80%]">
              <div className="flex my-10">
                {/* Icon */}
                <div className="bg-white shadow-md h-[fit-content] mr-5 py-2 px-2 border rounded-br-2xl">
                  <FaAward size={35} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-700">
                    Precise Guidance
                  </h3>
                  <p className="text-sm text-gray-800 mt-1">
                    Our team of immigration specialists thoroughly assesses each
                    case and offers clear, accurate guidance to help you move
                    forward with confidence.
                  </p>
                </div>
              </div>
              <div className="flex">
                {/* Icon */}
                <div className="bg-white shadow-md h-[fit-content] mr-5 py-2 px-2 border rounded-br-2xl">
                  <FaThumbsUp size={35} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-700">
                    Our Commitment
                  </h3>
                  <p className="text-sm text-gray-800 mt-1">
                    We place great emphasis on trust, providing transparent
                    legal advice that serves your best interests. We’re
                    committed to giving you realistic expectations, even if it
                    means saying "NO" to avoid raising false hopes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ceo section */}
      {/* <section>
  <div className="flex items-start justify-around mt-20 w-[90%] md:w-[90%] xl:w-[85%] mx-auto gap-20">
  <div className="w-1/3">
      <img src={gaurav_garg.src} className="h-[25rem]" />
    </div>
    <div className="w-2/3 flex flex-col  ">
    <div className="px-2 sm:px-0 w-full ">
              <div className="mt-4 flex gap-5 ">

                <div className="w-[0.3rem] bg-blue-600"></div>
                <div className="w-full lg:w-[80%]">
                  <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
                  Empowering Global Education
                  </h2>
                  <h2 className="font-black text-gray-800 lg:leading-none text-[2.2rem] lg:text-[2.6rem]">
                  for a Brighter Tomorrow.
                  </h2>
                </div>
              </div>
            </div>
              <p className="text-sm text-gray-800  text-justify w-[75%] mt-8">
              At Abroad Educares, we take immense pride in being a trusted partner for educational institutions, helping shape the future of global academic success. With a robust track record of providing expert support in Visa Assistance, GIC, and Financial Services, we ensure a smooth and efficient journey for students aspiring to study abroad.
              </p>
              <p className="text-sm text-gray-800  w-[75%] text-justify py-5">
              As a leader in the industry, we go beyond conventional services, fostering strong collaborations with institutions and schools to unlock new opportunities for students worldwide. Our unwavering dedication to excellence drives our mission to break down barriers, opening doors to brighter, global futures for the leaders of tomorrow.
              </p>
              <p className="text-sm text-gray-800  w-[75%] text-justify">
              With your continued trust, Abroad Educares will remain a dynamic force in the international education sector, paving the way for transformative academic journeys.
              </p>
    </div>
  
  </div>
</section> */}

      {/* ceo section */}
      <section className="mt-20 px-10 ">
  <div className="grid grid-cols-10 mx-auto h-[42rem] relative">
    <div className="col-span-3 relative">
      <div className="flex items-center justify-center h-[42rem] relative">

      <div className="bg-white h-[20rem] px-10 absolute ">
 
    <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light text-center">
                  Empowering Global Education for a Brighter Tomorrow.
                  </h2>
      </div>
      </div>
    </div>
    <div
      className="col-span-4 bg-cover bg-top grayscale contrast-100"
      style={{
        backgroundImage: `url(${ceo2.src})`,
        
      }}
    ></div>
    <div className="col-span-3"></div>
  </div>
</section>
    </>
  );
};

export default page;
