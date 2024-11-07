import React from "react";
import passpost_with_plane from "@public/assets/images/ServicesPage/passport_with_plane.jpg";
import Link from "next/link";
import {FaGraduationCap,FaMapMarkedAlt, FaVideo, FaBook, FaLanguage, FaExchangeAlt, FaFlask, FaPlane, FaSun, FaBriefcase, FaGlobe, FaShieldAlt} from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import Timeline from "@/components/ServicesComponent/Timeline";
import DreamDestination from "@/components/ServicesComponent/DreamDestination";
import CountriesCarousel from "@/components/ServicesComponent/CountriesCarousel";
import world_map from "@public/assets/images/HomePage/world_map.png";
const Page = () => {
  const GreatVisaContent = [
    {
      title: "Study Visa",
      text: "Access opportunity to world-class education by studying in international university and colleges and pave your way towards the permanent residency of that country.",
      icon: (
        <FaGraduationCap
          size={45}
          className="text-blue-700 group-hover:text-white"
        />
      ),
    },
    {
      title: "Business Visa",
      text: "There are a number of visas available for businesses. Each has its own legislative requirements but we can help you navigate through the jargon and submit the strongest possible application.",
      icon: (
        <FaSackDollar
          size={45}
          className="text-blue-700 group-hover:text-white"
        />
      ),
    },

    {
      title: "Tourist Visa",
      text: "Our Immigration Team can help you to Travel the world with Tourist Visa allows immigrants to enjoy grandeur beauty &amp; Culture of the nation.",
      icon: (
        <FaMapMarkedAlt
          size={45}
          className="text-blue-700 group-hover:text-white"
        />
      ),
    },

  ];

const programs = [
  {
    title: "Joint Online Conference",
    description: "We help in organizing online conferences & inviting foreign delegates to elevate your school’s global status.",
    icon: (
      <FaVideo size={30} className="text-blue-700 group-hover:text-white" />
    )
  },
  {
    title: "ETP (English Test Preparation)",
    description: "ETP is a comprehensive online course designed to help students excel in the PTE exam. It offers customized study plans, unlimited mock tests, real-time exam simulations, online classes, and proven strategies for high scores.",
    icon: (
      <FaBook size={30} className="text-blue-700 group-hover:text-white" />
    )
  },
  {
    title: "ESL (English as a Second Language)",
    description: "ESL is a certification course designed to help students develop essential English language skills for their international journey. Certification is provided by a prestigious Canadian institution, offering a valuable credential for global opportunities.",
    icon: (
      <FaLanguage size={30} className="text-blue-700 group-hover:text-white" />
    )
  },
  {
    title: "Student Exchange Program",
    description: "This program enables students to study abroad for a designated period, immersing them in a new culture, language, and educational environment.",
    icon: (
      <FaExchangeAlt size={30} className="text-blue-700 group-hover:text-white" />
    )
  },
  {
    title: "Joint Research Program",
    description: "We help build partnerships between your institution and international institutions, creating opportunities for collaborative research programs.",
    icon: (
      <FaFlask size={30} className="text-blue-700 group-hover:text-white" />
    )
  },
  {
    title: "Ed Leisure Trips",
    description: "Ed leisure trips combine education and leisure, offering a mix of fun and learning. Participants enjoy recreational activities while visiting cultural, historical, or scientific sites, making education enjoyable.",
    icon: (
      <FaPlane size={30} className="text-blue-700 group-hover:text-white" />
    )
  },
  {
    title: "Summer/Winter School Program",
    description: "These programs are designed to offer students engaging learning opportunities, skill development, and enjoyable experiences in areas like academics, arts, sports, and hobbies during the summer and winter months.",
    icon: (
      <FaSun size={30} className="text-blue-700 group-hover:text-white" />
    )
  },
  {
    title: "Higher Studies Abroad",
    description: "This program provides students with opportunities to pursue further studies abroad after finishing their current education, facilitating their academic and professional growth.",
    icon: (
      <FaGraduationCap size={30} className="text-blue-700 group-hover:text-white" />
    )
  },
  {
    title: "Foreign Industry Training",
    description: "This program provides students and professionals with the chance to gain practical work experience abroad, applying their skills in real-world environments and learning about diverse industries.",
    icon: (
      <FaBriefcase size={30} className="text-blue-700 group-hover:text-white" />
    )
  },
  {
    title: "Global Internship Opportunity",
    description: "This program offers students and professionals internships abroad, providing hands-on experience and immersion in diverse cultural and professional environments.",
    icon: (
      <FaGlobe size={30} className="text-blue-700 group-hover:text-white" />
    )
  },
  {
    title: "Student Insurance",
    description: "Our Student Insurance provides essential coverage for international students, ensuring peace of mind against health, travel, and other unforeseen challenges during their academic journey abroad.",
    icon: (
      <FaShieldAlt size={30} className="text-blue-700 group-hover:text-white" />
    )
  }
  
];



  
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${passpost_with_plane.src})`, // If the image is imported
        }}
        className="bg-no-repeat relative bg-center bg-cover w-full h-[25rem] flex items-center justify-center"
      >
        {/* Black overlay with reduced opacity */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-55 z-0"></div>

        {/* Text content with increased z-index for visibility */}
        <div className="relative z-10 w-full flex flex-col  items-center gap-5 text-white">
          <h2 className="font-extrabold text-5xl md:text-6xl uppercase">
            Our Services
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
                <Link href="/Services" className=" hover:underline">
                  Services
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Choose your visa */}
      <section className="my-20 py-10">
        <div className="w-[90%] md:w-[90%] xl:w-[85%] mx-auto">
          <div className="text-center">
            <h4 className="text-blue-700 uppercase font-regular text-md">
              Choose Your Visa
            </h4>

            <h3 className="text-[2.2rem] lg:text-[2.6rem] font-light">
              We Provide Our Experts To
            </h3>
            <h3 className="font-black text-gray-800 lg:leading-none text-[2rem] lg:text-[2.6rem]">
              Generate Great Visa
            </h3>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            {/* below one is Our Location */}
            {GreatVisaContent.map((item, index) => (
              <div
                className="group flex flex-col   border-[0.1px] border-blue-700 p-8 md:p-12 hover:border-blue-700 hover:bg-blue-700 transition-all duration-300"
                key={index}
              >
                {item.icon}
                <h3 className="font-bold text-xl text-gray-800 py-3  group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-sm mb-5 text-gray-700   group-hover:text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-[8rem]">
        <Timeline />
      </section>

      <section className="my-20 py-10">
        <div className="w-[90%] md:w-[90%] mx-auto">
          <div className="text-center">
            <h4 className="text-blue-700 uppercase font-regular text-md">
              Services for Institutions
            </h4>

            <h3 className="text-[2.2rem] lg:text-[2.6rem] font-light">
            Empowering Global Opportunities
            </h3>
            <h3 className="font-black text-gray-800 lg:leading-none text-[2rem] lg:text-[2.6rem]">
            for Students
            </h3>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 g mt-10 ">
            {/* below one is Our Location */}
            {programs.map((item, index) => (
              <div
                className="group flex flex-row gap-5 items-center  p-4 transition-all duration-300"
                key={index}
              > 
              <div className="bg-white group-hover:bg-blue-700  border-[0.1px] border-blue-700 transition-all duration-300 rounded-full p-5 ">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-800 py-3  ">
                  {item.title}
                </h3>
                <p className="text-sm mb-5 text-gray-700 text-justify ">
                  {item.description}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
    </>
  );
};

export default Page;
