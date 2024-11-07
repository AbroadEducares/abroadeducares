import React from "react";
import students_writing from "@public/assets/images/AboutPage/students_writing.jpg";
import Link from "next/link";
import forex_stock from "@public/assets/images/AboutPage/forex_stock.jpg";
import smiley_students_library from "@public/assets/images/AboutPage/smiley_students_library.jpg";
import students_holding_map from "@public/assets/images/AboutPage/students_holding_map.jpg";
import woman_working_travel from "@public/assets/images/AboutPage/women_working_travel.jpg";
import ceo2 from "@public/assets/images/AboutPage/ceo2.png";
import { FaAward, FaThumbsUp } from "react-icons/fa";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
const Page = () => {
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
                <Image
                  src={forex_stock.src}
                  alt="Passport"
                  className="w-[41rem] md:w-[28rem] h-[fit-content] lg:w-[17rem] lg:h-[17rem] object-left-top"
                  loading="lazy"
                />
                <Image
                  src={smiley_students_library.src}
                  alt="Hat"
                  className="w-[41rem] md:w-[28rem] lg:w-[17rem] h-[17rem] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-4 items-center justify-center lg:mb-20 mb-0">
                {/* Two images */}
                <Image
                  src={woman_working_travel.src}
                  alt="Passport"
                  className="w-[41rem] md:w-[28rem] h-[fit-content] lg:w-[17rem] lg:h-[17rem] object-cover"
                  loading="lazy"
                />
                <Image
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
                    legal advice that serves your best interests. We&apos;re
                    committed to giving you realistic expectations, even if it
                    means saying &quot;NO&quot; to avoid raising false hopes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ceo section */}
      <section className="px-4 lg:px-0">
      <div className="lg:grid lg:grid-cols-10 mx-auto h-auto lg:h-[42rem] relative">
        {/* Left text box */}
        <div className="col-span-3 bg-white">
          <div className="flex items-center justify-center lg:h-[42rem] h-[20rem] relative">
            <div className="bg-gray-800 w-full sm:w-[70%] lg:w-auto h-[15rem] sm:h-[20rem] lg:h-[30rem] px-5 absolute lg:right-[-50px] z-10 items-center justify-center flex shadow-lg">
              <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.6rem] font-light text-center text-white">
                Empowering Global Education for a{" "}
                <span className="font-bold">Brighter Tomorrow.</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Center background image */}
        <div
          className="col-span-4 bg-cover bg-top lg:bg-top grayscale contrast-100 h-[15rem] sm:h-[25rem] lg:h-auto"
          style={{
            backgroundImage: `url(${ceo2.src})`,
          }}
        ></div>

        {/* Right text and links */}
        <div className="col-span-3 flex flex-col justify-around items-end bg-gray-800 px-5 sm:px-10 py-8 lg:py-0">
          <div className="sm:px-0 w-full sm:pl-10">
            <h3 className="text-white uppercase font-regular text-md">
              CEO & Founder
            </h3>
            <div className="mt-4 flex gap-5">
              <div className="w-[0.3rem] bg-blue-600"></div>
              <div className="w-full ">
                <h2 className="font-black text-white lg:leading-none text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem]">
                  Gaurav Garg
                </h2>
              </div>
            </div>
            <p className="text-sm text-white text-justify mt-6 lg:mt-10">
              &quot;At Abroad Educares, we&apos;re proud to support students&apos; aspirations
              to study abroad with expert Visa Assistance, GIC, and Financial
              Services. As industry leaders, we partner with institutions to
              create global opportunities and break down barriers in education.
              With your trust, we&apos;ll continue paving the way for transformative
              academic journeys worldwide.&quot;
            </p>
          </div>

          {/* Social links */}
          <div className="flex  sm:flex-row items-start sm:items-center gap-4 mt-6 sm:mt-0">
            <p className="text-white text-sm">Let&apos;s Connect!</p>
            <div className="flex items-center">
              <div className="w-10 sm:w-20 bg-white h-[0.5px]"></div>
              <IoIosArrowForward color="white" />
            </div>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <a href="https://www.facebook.com/gaurav.garg.1420" target="_blank">
                <FaFacebookSquare
                  size="20"
                  className="hover:text-blue-600 text-white transition-all duration-300 cursor-pointer"
                />
              </a>
              <a href="https://www.linkedin.com/in/gaurav-garg-7332264a/" target="_blank">
                <FaLinkedin
                  size="20"
                  className="hover:text-blue-600 text-white transition-all duration-300 cursor-pointer"
                />
              </a>
              <a href="https://www.instagram.com/garry_garg" target="_blank">
                <FaInstagramSquare
                  size="20"
                  className="hover:text-blue-600 text-white transition-all duration-300 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Page;
