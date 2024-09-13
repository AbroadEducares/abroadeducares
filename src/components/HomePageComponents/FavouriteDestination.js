import React from "react";
import Button from "@/components/Button";
import country_australia from "@public/assets/images/HomePage/country_australia.jpg";
import country_canada from "@public/assets/images/HomePage/country_canada.jpg";
import country_us from "@public/assets/images/HomePage/country_us.jpg";
import country_uk from "@public/assets/images/HomePage/country_uk.jpg";
import world_map from "@public/assets/images/HomePage/world_map.png";

const FavouriteDestination = () => {
  const FavouriteDestinationContent = [
    {
      img: country_canada,
      title: "Canada",
      para: "Canada is a great place to live, work,study or do business . Infact, Canada is ranked as the second.",
    },
    {
      img: country_australia,
      title: "Australia",
      para: "Australia is known as the land of opportunities One of the most famous & popular destinations.",
    },
    {
      img: country_us,
      title: "United States",
      para: "Looking for Green Card ? With the GDP of 21.5 Trillion, The USA retains no 1 position in the world.",
    },
    {
      img: country_uk,
      title: "United Kingdom",
      para: "Discover a country filled with epic landscapes, fairy-tales castles and vibrant modern cities.",
    },
  ];

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
              Favourite Destination
            </h3>
            <div className="mt-4 flex gap-5">
              {/* White Line */}
              <div className="w-[0.3rem] bg-blue-600"></div>
              <div className="w-full">
                <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
                  For The Immigration
                </h2>
                <h2 className="font-black text-gray-800 lg:leading-none text-[2rem] lg:text-[2.6rem]">
                  Choose Your Country
                </h2>
              </div>
            </div>
          </div>
          {/* Button Section */}
          <div className="flex">
            <div className="mt-8 md:mt-auto">
              <Button text="All Countries" />
            </div>
          </div>
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          {FavouriteDestinationContent.map((item, index) => (
            <div
              className="w-full lg:max-w-[19rem] bg-white border border-gray-200 shadow-md"
              key={index}
            >
              <img className="w-full" src={item.img.src} alt={item.title} />
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

        {/* Footer Text */}
        <p className="text-center">
          Would you like to speak to one of our consultants over the phone?{" "}
          <span className="font-bold">Explore All Countries.</span>
        </p>
      </div>
    </div>
  );
};

export default FavouriteDestination;
