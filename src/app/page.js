"use client";
import { useState, useEffect } from "react";
import EnquiryForm from "@/components/HomePageComponents/EnquiryForm";
import HeroImg from "@public/assets/images/HomePage/HeroImg.jpg";
import Button from "@/components/Button";
import { FaArrowRightLong,FaMapLocationDot  } from "react-icons/fa6";
import happyTravels from "@public/assets/images/HomePage/happyTravels.jpg";
import hat from "@public/assets/images/HomePage/hat.jpg";
import passport from "@public/assets/images/HomePage/passport.jpg";
import { FaAward, FaThumbsUp,FaCalendarCheck  } from "react-icons/fa";
import VisaServiceCard from "@/components/HomePageComponents/VisaServiceCard";
import ChooseYourVisa from "@/components/HomePageComponents/ChooseYourVisa";
import CountriesCarousel from "@/components/ServicesComponent/CountriesCarousel";
import testimonial_img from "@public/assets/images/HomePage/testimonial_img.jpg";
import TestimonialCarousel from "@/components/HomePageComponents/TestimonialCarousel";
import american_passport from "@public/assets/images/HomePage/american_passport.jpg";
import women_in_library from "@public/assets/images/HomePage/women_in_library.jpg";
import man_with_laptop from "@public/assets/images/HomePage/man_with_laptop.jpg";
import student_with_books from "@public/assets/images/HomePage/student_with_books.jpg";
import Man_in_BlueJeans from "@public/assets/images/HomePage/Man_in_BlueJeans.jpg";
import TopView_of_document from "@public/assets/images/HomePage/TopView_of_document.jpg";
import world_map from "@public/assets/images/HomePage/world_map.png";
import Image from "next/image";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

export default function Home() {
  const API_ID= process.env.UPLOADTHING_APP_ID;
  const [Experience, setExperience] = useState(0);
  const [Projects, setProjects] = useState(0);

  useEffect(() => {
    const targetExperience = 4;
    const targetProjects = 500;

    const increment = (target, setter) => {
      let current = 0;
      const stepTime = Math.abs(Math.floor(1000 / target)); // Adjust timing as needed
      const timer = setInterval(() => {
        current += 1;
        setter(current);
        if (current === target) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    increment(targetExperience, setExperience);
    increment(targetProjects, setProjects);
  }, []);

  return (
    <>
      <section className="relative h-[95rem] sm:h-[85rem] md:h-[85rem] lg:h-[65rem] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#000080] via-[#000080] to-[#000080] brightness-[0.65]"
          style={{
            backgroundImage: `url(${HeroImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between px-0 md:px-4 lg:px-8 relative z-10">
          <div className="text-white px-2 sm:px-0 w-full lg:w-1/2">
            <h3 className="uppercase font-medium text-xl">Abroad Educares</h3>
            <div className="mt-4 flex gap-5 ">
              {/* white line */}
              <div className="w-[0.3rem]  bg-white"></div>
              <div className="w-full">
                <h1 className="leading-[4rem] lg:leading-none  text-[2.2rem] sm:text-[3.4rem] lg:text-[4rem] font-extralight">
                Register for Global Exposure Education Fair:{" "}
                  <span className="font-bold">Your Pathway to World-Class Education!</span>
                </h1>
              </div>
            </div>
            {/* date venue time */}
            <div className="mt-10">
              <div className="flex items-center gap-3">
              <FaCalendarCheck size={55} className="text-white"/>
              <div>

                <h4 className="text-2xl font-bold">DATE</h4>
                <h4 className="text-2xl">17th Nov 2024</h4>
              </div>
              </div>
             
              <div className="flex items-center gap-3 mt-5">
              <MdOutlineAccessTimeFilled  size={55} className="text-white"/>
              <div>

                <h4 className="text-2xl font-bold">TIME</h4>
                <h4 className="text-2xl">10:30 A.M to 5:00 P.M</h4>
              </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
              <FaMapLocationDot  size={55} className="text-white  "/>
              <div>

                <h4 className="text-2xl font-bold">VENUE</h4>
                <h4 className="text-2xl">SVIET, Banur</h4>
              </div>
              </div>
            </div>
          </div>
          <div className="w-full  lg:w-1/2 mt-8  lg:mt-0 md:pb-0 ">
            {/* Enquiry form */}
            <EnquiryForm />
          </div>
        </div>
      </section>
      {/* Immigration experts section */}
      <section className="flex flex-col-reverse lg:flex-row relative w-full -mt-[5rem] z-30 ">
        <div className="w-full lg:w-[50%] flex items-end">
          <div className="ml-5 mt-8 lg:mt-0 lg:ml-10">
            <p>
              Don&apos;t Hesitate, Contact us for Better Help and Services.{" "}
              <span className="font-bold">Explore All Categories.</span>
            </p>
          </div>
        </div>

        {/* below div contain, Immigration Experts, Apply Online Visa, Immigration Experts */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full lg:w-[50%]">
          <div className="bg-white shadow shadow-gray-300 mix-blend-darken">
            <div className="flex flex-col pb-10">
              <div>
                <div className="bg-blue-600 w-[fit-content] border-1 rounded-br-[1.25rem]">
                  <h4 className="text-white px-[0.6rem] py-[0.3rem] font-semibold text-xl">
                    01.
                  </h4>
                </div>
              </div>
              <div>
                <h2 className="text-start ml-6 font-bold text-lg text-gray-800 py-4">
                  Immigrations Experts
                </h2>
              </div>
              <div className="flex justify-center items-center">
                <p className="mx-[1.5rem] text-sm text-gray-800">
                  We are providing the best service and consultancy for your
                  delightful immigration experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600">
            <div className="flex flex-col pb-10">
              <div>
                <div className="bg-white w-[fit-content] border-1 rounded-br-[1.25rem]">
                  <h4 className="text-gray-800 px-[0.6rem] py-[0.3rem] font-semibold text-xl">
                    02.
                  </h4>
                </div>
              </div>
              <div>
                <h2 className="text-start ml-6 font-bold text-lg text-white py-4">
                  Apply Online Visa
                </h2>
              </div>
              <div className="flex justify-center">
                <p className="mx-[1.5rem] text-sm text-white">
                  We will help you providing proper guidance and step of the
                  Visa application process.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800">
            <div className="flex flex-col pb-10">
              <div>
                <div className="bg-blue-600 w-[fit-content] border-1 rounded-br-[1.25rem]">
                  <h4 className="text-white px-[0.6rem] py-[0.3rem] font-semibold text-xl">
                    03.
                  </h4>
                </div>
              </div>
              <div>
                <h2 className="text-start ml-6 font-bold text-lg text-white py-4">
                  Immigrations Experts
                </h2>
              </div>
              <div className="flex justify-center items-center">
                <p className="mx-[1.5rem] text-sm text-white">
                  We will help you throughout the Immigration Process of your
                  country of dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experienced staff */}
      <section className="mt-20 py-10">
        <div className="flex flex-col-reverse lg:flex-row justify-center px-0 lg:px-4 xl:px-0">
          {/* Left div */}
          <div className="mt-10 lg:mt-0 ml-0 mr-5 lg:ml-14 w-full lg:w-[50%] hidden items-center justify-center md:flex">
            {/* Wrapper */}
            <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row gap-4 mx-5 lg:mx-0">
              <div className="flex flex-col gap-4 items-center justify-center">
                {/* Two images */}
                <div className="relative w-full h-full md:w-[17rem] md:h-[17rem] ">
  <img
   src={`https://utfs.io/a/${API_ID}/J3qszI0odXYG1wbK7B0lc6KYjVNtvIni5qPDhgAOb9Qlfrxp`}
    alt="Passport"
    className="object-cover h-full w-full"
    
    
  />
</div>

<div className="relative md:w-[17rem] md:h-[17rem] w-full h-full">
  <img
     src={`https://utfs.io/a/${API_ID}/J3qszI0odXYGCgv24jm8UiP5BnYc1opjX7zWkFO32Z0KdSGt`}
    alt="Hat"
    className="object-cover w-full h-full"
  />
</div>

              </div>
              <div className="flex items-center">
                {/* Large image */}
                <div className="relative md:w-[20rem] md:h-[30rem] w-full h-full">
  <img
     src={`https://utfs.io/a/${API_ID}/J3qszI0odXYGoy9KOXPeoPFtRZgCiSdmYIpHGABq4O9VQ0XD`}
    alt="Happy Travels"
    className="object-cover w-full h-full "
    fill
  />
</div>

              </div>
            </div>
          </div>

          {/* Right div */}
          <div className="lg:w-[50%] ml-5 max-w-6xl lg:px-0 flex flex-col lg:flex-col pr-3">
            <div className="px-2 sm:px-0 w-full">
              <h3 className="text-blue-700 uppercase font-regular text-md">
                About Abroad Educare
              </h3>
              <div className="mt-4 flex gap-5">
                {/* White line */}
                <div className="w-[0.3rem] bg-blue-600"></div>
                <div className="w-full lg:w-[80%]">
                  <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
                    Immigration Services From
                  </h2>
                  <h2 className="font-black text-gray-800 lg:leading-none text-[2.2rem] lg:text-[2.6rem]">
                    Experienced Staff
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-6 lg:mt-10 gap-4 w-full  lg:pl-0 lg:w-[80%]">
              <p className="text-sm text-gray-800">
                Changes in immigration legislation are followed by everyone in
                our organization. Because of our many years of expertise, we are
                able to handle every matter swiftly and effectively.
              </p>
              <p className="text-sm text-gray-800">
                Each case is unique, but we take the time to get to know our
                customers and find the best solution for them. We are licensed
                experts who constantly expand our expertise through professional
                development initiatives.
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
                    Accurate Guidance
                  </h3>
                  <p className="text-sm text-gray-800 mt-1">
                    Our immigration advisors and experts will review your case
                    in-depth and offer the best guidance.
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
                    Our Presence
                  </h3>
                  <p className="text-sm text-gray-800 mt-1">
                    We highly value trust and provide honest legal advice that&apos;s
                    in your best interest. We are happy to say &quot;NO&quot; rather than
                    giving false hopes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Visa service */}
      <section className=" mt-10 md:mt-20 py-10">
        <VisaServiceCard />
      </section>
      {/* Choose your visa */}
      <section
        className="bg-gray-800 bg-cover bg-center pt-[12rem] mt-[-12rem] pb-[6rem]"
        // style={{backgroundImage:`url(${footerBg.src})`}}
      >
        <div className="pt-10 bg-gray-800 ">
          <div className="text-center">
            <h3 className="text-white uppercase font-regular text-md">
              Choose Your Visa
            </h3>
            <h2 className="text-[2.2rem] lg:text-[2.6rem] text-white font-light mx-5">
              Our experts will get
              <span className="font-black ml-3 text-white lg:leading-none text-[2.2rem] lg:text-[2.6rem]">
                it done for you
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] md:w-[90%] xl:w-[85%] mt-10 mx-auto">
            <ChooseYourVisa />
          </div>
        </div>
      </section>

      {/* Favourite destination */}
      <section className="w-full">
        <div className="relative w-[90%] md:w-[90%] xl:w-[85%] mt-20 py-10 mx-auto">
          {/* World Map Background */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full opacity-10 bg-no-repeat bg-contain bg-right"
              style={{ backgroundImage: `url(${world_map.src})` }}
            ></div>
          </div>

          {/* Content on Top */}
          <div className="relative z-10">
            <div className="block md:flex justify-between">
              {/* Text Section */}
              <div className="px-2 sm:px-0">
                <h3 className="text-blue-700 uppercase font-regular text-md">
                  Explore Your Dream Destination
                </h3>
                <div className="mt-4 flex gap-5">
                  {/* White Line */}
                  <div className="w-[0.3rem] bg-blue-600"></div>
                  <div className="w-full">
                    <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
                      Find the Perfect Country
                    </h2>
                    <h2 className="font-black text-gray-800 lg:leading-none text-[2rem] lg:text-[2.6rem]">
                      for Your Next Journey
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Country Cards */}

            <CountriesCarousel />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full">
        <div className="w-[90%] md:w-[90%] xl:w-[85%] mt-20 py-10 mx-auto block lg:flex items-center justify-center h-[max-content]">
          <div className="w-[50%] lg:block hidden">
          <div className="relative w-full h-[30rem]"> {/* Adjust height as needed */}
  <img
     src={`https://utfs.io/a/${API_ID}/J3qszI0odXYGispF60wncK2JHgkCLjUlpVNmO0AtWq7Ze9fr`}
    alt="footerBg"
    className="object-cover h-full w-full"
    
  />
</div>

          </div>
          <div className="mx-auto w-full lg:w-[50%] flex flex-col gap-10">
            <div className="lg:mt-16">
              <div className="lg:max-w-[39rem] bg-white z-5 p-8 sm:p-16 lg:-ml-10 shadow-xl">
                {/* below one is heading */}
                <div className="px-0 sm:px-0 md:px-2 ">
                  <h3 className="text-blue-700 uppercase text-wrap font-regular text-md">
                    Testimonial
                  </h3>
                  <div className="my-6 flex gap-5">
                    {/* White line */}
                    <div className="w-[0.3rem] bg-blue-600"></div>
                    <div className="w-full block md:flex items-center flex-wrap gap-3">
                      <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
                        Satisfied
                      </h2>
                      <h2 className="font-black  text-gray-800 lg:leading-none text-[2.2rem] lg:text-[2.6rem]">
                        Customers
                      </h2>
                    </div>
                  </div>
                </div>
                {/* testimonial carousel designing */}
                <TestimonialCarousel />
              </div>
            </div>
            {/* below div is counter */}
            <div className="flex justify-center">
              <div className="flex gap-8 md:gap-[10rem]">
                <div className="flex flex-col gap-x-1 items-center p-1">
                  <div>
                    <p className="text-[2.4rem] lg:text-[2.6rem] font-semibold text-gray-800">
                      {Experience}
                      <span className="text-blue-600">+</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-normal text-center  text-gray-800">
                      Years of Experience
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-x-1 items-center p-1">
                  <div className="text-center">
                    <p className="text-[2.4rem] lg:text-[2.6rem] font-semibold text-gray-800">
                      {Projects} <span className="text-blue-600">+</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-normal text-center text-gray-800">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We provide the best service */}
      <section
        style={{
          backgroundImage: `url(${american_passport.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[max-content] relative" // Added relative for positioning the overlay
      >
        {/* Black overlay div */}
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

        <div className="relative w-[90%] md:w-[90%] xl:w-[85%] mt-20 py-10 mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="px-2 sm:px-0 py-10 lg:px-10">
              <h3 className="text-white uppercase font-regular text-md">
                Favourite Destination
              </h3>
              <div className="mt-4 flex gap-5">
                {/* White Line */}
                <div className="w-[0.3rem] bg-white"></div>
                <div className="w-full">
                  <h2 className="text-white text-[2.2rem] lg:text-[2.6rem] font-light">
                    We provide the best solutions
                  </h2>
                  <h2 className="font-black text-white lg:leading-none text-[2rem] lg:text-[2.6rem]">
                    to globalise your boundaries
                  </h2>
                </div>
              </div>
              <p className="text-sm font-normal text-white my-10">
                Having acquired skills and experience in the management of
                migration applications, our clients receive expert advice and
                meticulous monitoring of their applications throughout the
                entire process of immigration. We are constantly kept abreast
                with the latest changes, thus improving the management of
                applications.
              </p>
              <Button text="Contact Us" textColor="text-white" href="/Contact#contactForm"/>
            </div>
          </div>
          <div className="lg:block hidden"></div>
        </div>
      </section>

      {/* News & Articles */}
      <section>
        <div className="relative w-[90%] md:w-[90%] xl:w-[85%] mt-20 py-10 mx-auto">
          <div className="text-center">
            <h3 className="text-blue-700 uppercase font-regular text-md">
              the news
            </h3>

            <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
              News &{" "}
              <span className="font-black text-gray-800 lg:leading-none text-[2rem] lg:text-[2.6rem]">
                Article
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-10  grid-flow-dense direction-rtl">
            <div className="flex flex-col gap-8">
              <div className="block sm:flex gap-8">
                <a
                  href="https://www.thehindu.com/education/benefits-of-student-exchange-programmes/article67610667.ece"
                  target="_blank"
                >
                  <div
                    style={{
                      backgroundImage: `url(${women_in_library.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="h-[15rem] sm:h-[10rem] w-full sm:w-[10rem]  cursor-pointer "
                  ></div>
                </a>
                <div className="flex flex-col gap-4 mt-5 sm:mt-0">
                  <h4 className="font-bold ">
                    Benefits of student exchange programmes
                  </h4>{" "}
                  <p className="text-sm font-normal  text-gray-800">
                    Student exchange programmes are not only enriching
                    experience....
                  </p>
                  <a
                    className="flex items-center gap-3 font-light cursor-pointer hover:underline hover:text-gray-800 uppercase text-blue-600 group"
                    href="https://www.thehindu.com/education/benefits-of-student-exchange-programmes/article67610667.ece"
                    target="_blank"
                  >
                    Read More{" "}
                    <span className="transition-all duration-300 group-hover:translate-x-2">
                      <FaArrowRightLong size={15} />
                    </span>
                  </a>
                </div>
              </div>
              <div className="block sm:flex gap-8">
                <a
                  href="https://www.northwestcareercollege.edu/blog/what-is-esl-and-why-is-it-important/"
                  target="_blank"
                >
                  <div
                    style={{
                      background: `url(${student_with_books.src}) no-repeat center center/cover`,
                    }}
                    className="h-[15rem] sm:h-[10rem] w-full sm:w-[10rem]  cursor-pointer "
                  ></div>
                </a>
                <div className="flex flex-col gap-4 mt-5 sm:mt-0">
                  <h4 className="font-bold ">
                    What is ESL and Why is it Important?
                  </h4>{" "}
                  <p className="text-sm font-normal  text-gray-800">
                    English as a Second Language (ESL) is one of the most...
                  </p>
                  <a
                    className="flex items-center gap-3  font-light cursor-pointer hover:underline hover:text-gray-800 uppercase text-blue-600 group"
                    href="https://www.northwestcareercollege.edu/blog/what-is-esl-and-why-is-it-important/"
                    target="_blank"
                  >
                    Read More{" "}
                    <span className="transition-all duration-300 group-hover:translate-x-2">
                      <FaArrowRightLong size={15} />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="block sm:flex gap-8">
                <a
                  href="https://www.applyboard.com/blog/quiz-should-i-study-abroad?fbclid=PAAaZFSm2Xf23gN913qwn7J88KaGzL48pl3wmXt6jKHiJPuP6VgeyIwkBiuPg"
                  target="_blank"
                >
                  <div
                    style={{
                      backgroundImage: `url(${man_with_laptop.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="h-[15rem] sm:h-[10rem] w-full sm:w-[10rem]  cursor-pointer "
                  ></div>
                </a>
                <div className="flex flex-col gap-4 mt-5 sm:mt-0">
                  <h4 className="font-bold ">Should I Study Abroad?</h4>{" "}
                  <p className="text-sm font-normal  text-gray-800">
                    Are you asking yourself &quot;should I study abroad?&quot; Need a
                    little push in your in your deci..
                  </p>
                  <a
                    className="flex items-center gap-3 font-light cursor-pointer hover:underline hover:text-gray-800 uppercase text-blue-600 group"
                    href="https://www.applyboard.com/blog/quiz-should-i-study-abroad?fbclid=PAAaZFSm2Xf23gN913qwn7J88KaGzL48pl3wmXt6jKHiJPuP6VgeyIwkBiuPg"
                    target="_blank"
                  >
                    Read More{" "}
                    <span className="transition-all duration-300 group-hover:translate-x-2">
                      <FaArrowRightLong size={15} />
                    </span>
                  </a>
                </div>
              </div>
              <div className="block sm:flex gap-8">
                <a
                  href="https://www.indiatoday.in/education-today/study-abroad/story/moving-to-uk-for-higher-studies-things-to-keep-in-mind-for-an-unforgettable-experience-1999749-2022-09-13"
                  target="_blank"
                >
                  <div
                    style={{
                      backgroundImage: `url(${Man_in_BlueJeans.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="h-[15rem] sm:h-[10rem] w-full sm:w-[10rem]"
                  ></div>
                </a>
                <div className="flex flex-col gap-3 sm:mt-0 mt-5">
                  <h4 className="font-bold ">
                    Difference Between Visit Visa & Tourist Visa?
                  </h4>{" "}
                  <p className="text-sm font-normal  text-gray-800">
                    When you&apos;re planning a trip to a foreign country, one of the
                    first things....
                  </p>
                  <a
                    className="flex items-center gap-3 font-light uppercase cursor-pointer hover:underline hover:text-gray-800 text-blue-600 group"
                    href="https://www.indiatoday.in/education-today/study-abroad/story/moving-to-uk-for-higher-studies-things-to-keep-in-mind-for-an-unforgettable-experience-1999749-2022-09-13"
                    target="_blank"
                  >
                    Read More{" "}
                    <span className="transition-all duration-300 group-hover:translate-x-2">
                      <FaArrowRightLong size={15} />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://www.admissify.com/blog/7-countries-students-should-keep-an-eye-on-2023-if-they-want-to-immigrate/"
              target="_blank"
            >
              <div
                style={{
                  backgroundImage: `url(${TopView_of_document.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="relative flex flex-col cursor-pointer justify-end px-5 h-[20rem] xl:h-full"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

                {/* Content inside the div */}
                <div className="relative z-10">
                  {" "}
                  {/* z-10 to make content visible over the gradient */}
                  <h3 className="font-bold text-xl text-white py-3">
                    7 Countries Students Should Keep an Eye on (2024) If They
                    Want to Immigrate
                  </h3>
                  <p className="flex items-center gap-3 font-light uppercase text-white mb-5 cursor-pointer hover:underline group">
                    Read More
                    <span className="transition-all duration-300 group-hover:translate-x-2">
                      <FaArrowRightLong size={15} />
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
