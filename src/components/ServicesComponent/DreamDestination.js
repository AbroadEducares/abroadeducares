"use client"
import React, { useState } from "react";
import Button from "@/components/Button";
import country_australia from "@public/assets/images/HomePage/country_australia.jpg";
import country_canada from "@public/assets/images/HomePage/country_canada.jpg";
import country_us from "@public/assets/images/HomePage/country_us.jpg";
import country_uk from "@public/assets/images/HomePage/country_uk.jpg";
import world_map from "@public/assets/images/HomePage/world_map.png";
import country_france from "@public/assets/images/ServicesPage/country_france.jpg";
import country_singapore from "@public/assets/images/ServicesPage/country_singapore.jpg";
import country_uae from "@public/assets/images/ServicesPage/country_uae.jpg";
import country_germany from "@public/assets/images/ServicesPage/country_germany.jpg";
import country_poland from "@public/assets/images/ServicesPage/country_poland.jpg";
import country_malta from "@public/assets/images/ServicesPage/country_malta.jpg";
import country_croatia from "@public/assets/images/ServicesPage/country_croatia.jpg";
import country_cyprus from "@public/assets/images/ServicesPage/country_cyprus.jpg";
import country_ireland from "@public/assets/images/ServicesPage/country_ireland.jpg";
import Image from "next/image"; 
const DreamDestination = () => {
  const DreamDestinationContent = [
    {
      img: country_france,
      title: "France",
      para: "France boasts a strong economy, rich culture, and a high quality of life in the heart of Europe.",
    },
    {
      img: country_canada,
      title: "Canada",
      para: "Canada is a great place to live, work, study or do business. Ranked as the second-best country.",
    },
    {
      img: country_singapore,
      title: "Singapore",
      para: "Singapore is a global financial center offering cutting-edge infrastructure and a multicultural professional environment.",
    },
    {
      img: country_australia,
      title: "Australia",
      para: "Australia is known as the land of opportunities, one of the most famous and popular destinations.",
    },
    {
      img: country_poland,
      title: "Poland",
      para: "Poland's affordable living costs and growing economy make it an attractive destination for immigrants and investors.",
    },
    {
      img: country_uae,
      title: "UAE",
      para: "The UAE is a global hub offering luxury living, tax-free income, and unmatched business and job opportunities.",
    },
    {
      img: country_germany,
      title: "Germany",
      para: "Germany offers world-class education, a booming job market, and a high standard of living in Europe.",
    },
    {
      img: country_us,
      title: "United States",
      para: "Looking for a Green Card? With a GDP of 21.5 Trillion, the USA retains the number 1 position globally.",
    },
    {
      img: country_malta,
      title: "Malta",
      para: "A sunny Mediterranean island with favorable immigration policies, making it ideal for business and relaxation.",
    },
    {
      img: country_croatia,
      title: "Croatia",
      para: "Known for its natural beauty and welcoming environment, Croatia offers great opportunities for work-life balance.",
    },
    {
      img: country_cyprus,
      title: "Cyprus",
      para: "Cyprus offers a peaceful lifestyle with friendly tax policies and easy access to Europe and the Middle East.",
    },
    {
      img: country_uk,
      title: "United Kingdom",
      para: "Discover a country filled with epic landscapes, fairy-tale castles, and vibrant modern cities.",
    },
    {
      img: country_ireland,
      title: "Ireland",
      para: "Ireland, a tech and business hub, combines beautiful landscapes with excellent career growth and education opportunities.",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(8); // Initial number of visible cards

  const loadMore = () => {
    setVisibleCards((prev) => prev + 4); // Load 4 more cards
  };

  return (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          {DreamDestinationContent.slice(0, visibleCards).map((item, index) => (
            <div
              className="w-full lg:max-w-[19rem] bg-white border border-gray-200 shadow-md"
              key={index}
            >
              <Image
                className="w-full h-48 object-cover" // Set fixed height and cover object fit
                src={item.img.src}
                alt={item.title}
              />
              <div className="p-5 text-center">
                <a href="#">
                  <h3 className="font-bold my-5 text-xl text-gray-700">
                    {item.title}
                  </h3>
                </a>
                <p className="text-sm font-normal mb-10 text-gray-800">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        {visibleCards < DreamDestinationContent.length && ( 
            <div className="w-full text-center">
                <p className="text-sm font-normal text-gray-800">Uncover additional countries that could be your next home! <span
            onClick={loadMore}
            className="text-blue-700 font-bold cursorpointer underline"
          >
            Show More
          </span></p>
         
          </div>
        )}
      </div>
    </div>
  );
}

export default DreamDestination;
