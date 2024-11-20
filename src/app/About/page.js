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

const About = () => {
  const API_ID= process.env.UPLOADTHING_APP_ID;
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
      <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          {/* Left div (Images) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                 src={`https://utfs.io/a/${API_ID}/J3qszI0odXYGwGk1dCUqlUXJDVPSRW7Z4ayeucOfH0G6xLbK`}
                  alt="Forex stock"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 lg:h-64 rounded-lg"
                />
                <img
                 src={`https://utfs.io/a/${API_ID}/J3qszI0odXYGPmXPSg3ek6RCSzXuVAbvyn48w71QsGhaf9Lp`}
                  alt="Students in library"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 lg:h-64 rounded-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src={`https://utfs.io/a/${API_ID}/J3qszI0odXYG6426PBI8TRQXUKL3Ex5Ny6buWkpOMtZJlcBI`}
                  alt="Woman working while traveling"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 lg:h-64 rounded-lg"
                />
                <img
                  src={`https://utfs.io/a/${API_ID}/J3qszI0odXYGEUebLiWW8w6KUftDiSHblsQZhLPENdkrgB4C`}
                  alt="Students holding a map"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 lg:h-64 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right div (Content) */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-blue-700 uppercase font-medium text-sm mb-4">Who We Are</h3>
            <div className="flex gap-5 mb-8">
              <div className="w-1 bg-blue-600"></div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-light leading-tight">
                  Expert Immigration Services
                </h2>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-800 leading-tight">
                  From Professionals
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <p className="text-sm text-gray-800">
                Our organization closely monitors every change in immigration laws. With years of hands-on experience, we manage each case with precision and efficiency, ensuring smooth processes for our clients.
              </p>
              <p className="text-sm text-gray-800">
                Every situation is distinct, and we prioritize getting to know our clients to deliver personalized solutions. As licensed professionals, we are dedicated to expanding our knowledge through ongoing training and professional growth.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-white shadow-md p-3 rounded-br-2xl flex-shrink-0">
                  <FaAward size={24} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-700 mb-2">Precise Guidance</h3>
                  <p className="text-sm text-gray-800">
                    Our team of immigration specialists thoroughly assesses each case and offers clear, accurate guidance to help you move forward with confidence.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-white shadow-md p-3 rounded-br-2xl flex-shrink-0">
                  <FaThumbsUp size={24} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-700 mb-2">Our Commitment</h3>
                  <p className="text-sm text-gray-800">
                    We place great emphasis on trust, providing transparent legal advice that serves your best interests. We&apos;re committed to giving you realistic expectations, even if it means saying &quot;NO&quot; to avoid raising false hopes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* ceo section */}
      <section className="mt-10 px-4 lg:px-0">
        <div className="lg:grid lg:grid-cols-10 mx-auto h-auto lg:h-[42rem] relative">
          {/* Left text box */}
          <div className="col-span-3 bg-white hidden lg:grid">
            <div className="flex items-center justify-center lg:h-[42rem] h-[20rem] relative">
              <div className="bg-gray-800 w-full sm:w-[70%] lg:w-auto h-[15rem] sm:h-[20rem] lg:h-[30rem] px-5 absolute lg:right-[-50px] z-10 items-center justify-center flex shadow-lg ">
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
                &quot;At Abroad Educares, we&apos;re proud to support
                students&apos; aspirations to study abroad with expert Visa
                Assistance, GIC, and Financial Services. As industry leaders, we
                partner with institutions to create global opportunities and
                break down barriers in education. With your trust, we&apos;ll
                continue paving the way for transformative academic journeys
                worldwide.&quot;
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
                <a
                  href="https://www.facebook.com/gaurav.garg.1420"
                  target="_blank"
                >
                  <FaFacebookSquare
                    size="20"
                    className="hover:text-blue-600 text-white transition-all duration-300 cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/gaurav-garg-7332264a/"
                  target="_blank"
                >
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

export default About;
