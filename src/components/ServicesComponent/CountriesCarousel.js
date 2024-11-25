"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'; // Import Next.js Image component
import "@/app/globals.css"
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
function Responsive() {
  const API_ID= process.env.UPLOADTHING_APP_ID;
    const DreamDestinationContent = [
        {
            img: `https://utfs.io/a/${API_ID}/J3qszI0odXYGKrlwTkD1P83iuYWmE2htTC9ZJryxIRoaDgeO`,
            title: "France",
            para: "France boasts a strong economy, rich culture, and a high quality of life in the heart of Europe.",
          },
          {
            img: `https://utfs.io/a/${API_ID}/J3qszI0odXYGQyRmQvxXmeWtPUgARL40S1Vz6nKvN3Dyb2uw`,
            title: "Canada",
            para: "Canada is a great place to live, work, study or do business. Ranked as the second-best country.",
          },
          {
            img: `https://utfs.io/a/${API_ID}/J3qszI0odXYGneiA7WoEcXSMgyCWHhjDL6ORUIarQx5PA8ow`,
            title: "Singapore",
            para: "Singapore is a global financial center offering cutting-edge infrastructure and a multicultural professional environment.",
          },
          {
            img: `https://utfs.io/a/${API_ID}/J3qszI0odXYG7nnCxcl24Pn8rOhMfb5TI6WiVkBsFduUHRNc`,
            title: "Australia",
            para: "Australia is known as the land of opportunities, one of the most famous and popular destinations.",
          },
          {
            img: `https://utfs.io/a/${API_ID}/J3qszI0odXYG2iexWRXRNLdHgAkZuw20Vptr8q6Jmc9alMO7`,
            title: "Poland",
            para: "Polands affordable living costs and growing economy make it an attractive destination for immigrants and investors.",
          },
          {
            img: `https://utfs.io/a/${API_ID}/J3qszI0odXYGemI3X8hBLsAnadqJM5v6CIPOmT7jVKZlygGD`,
            title: "UAE",
            para: "The UAE is a global hub offering luxury living, tax-free income, and unmatched business and job opportunities.",
          },
          {
            img:`https://utfs.io/a/${API_ID}/J3qszI0odXYGFpjDj6L09B2KrSEQVqmF3lWhIyNed4bvG18X`,
            title: "Germany",
            para: "Germany offers world-class education, a booming job market, and a high standard of living in Europe.",
          },
          {
            img:`https://utfs.io/a/${API_ID}/J3qszI0odXYGUihzwVQ5hIN6OqPVkXzYGJTg7AsW13vESBlj`,
            title: "United States",
            para: "Looking for a Green Card? With a GDP of 21.5 Trillion, the USA retains the number 1 position globally.",
          },
          {
            img: `https://utfs.io/a/${API_ID}/J3qszI0odXYGyKtrUy8xm6TZSyVOX0Pkf3FDsRvgEMLuGcwa`,
            title: "Malta",
            para: "A sunny Mediterranean island with favorable immigration policies, making it ideal for business and relaxation.",
          },
          {
            img: `https://utfs.io/a/${API_ID}/J3qszI0odXYG2seGNJXRNLdHgAkZuw20Vptr8q6Jmc9alMO7`,
            title: "Croatia",
            para: "Known for its natural beauty and welcoming environment, Croatia offers great opportunities for work-life balance.",
          },
          {
            img: `https://utfs.io/a/${API_ID}/J3qszI0odXYGUa8TfjQ5hIN6OqPVkXzYGJTg7AsW13vESBlj`,
            title: "Cyprus",
            para: "Cyprus offers a peaceful lifestyle with friendly tax policies and easy access to Europe and the Middle East.",
          },
          {
            img: `https://utfs.io/a/${API_ID}/J3qszI0odXYGbxgIbQcNvAjehPYg42LbktmOGMnqC60cyoUa`,
            title: "United Kingdom",
            para: "Discover a country filled with epic landscapes, fairy-tale castles, and vibrant modern cities.",
          },
          {
            img: `https://utfs.io/a/${API_ID}/J3qszI0odXYGtjkmbiJfQzuwarxvEyT6iemgbSOUcID1nsoZ`,
            title: "Ireland",
            para: "Ireland, a tech and business hub, combines beautiful landscapes with excellent career growth and education opportunities.",
          },
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,
                    autoplaySpeed:2200,
                },
            },
        ],
    };

    return (
        <div className="slider-container mx-4 my-10">
            <Slider {...settings}>
                {DreamDestinationContent.map((item, index) => (
                    <div className="px-2" key={index}> {/* Add padding for gap between slides */}
                        <div className="h-[25rem] bg-white border border-gray-200 shadow-md flex flex-col justify-between">
                            <img
                                className="w-full h-48 object-cover"
                                src={item.img}
                                alt={item.title}
                                width={400}
                                height={200}
                            />
                            <div className="p-5 text-center flex-grow">
                                <h3 className="font-bold my-5 text-xl text-gray-700">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-normal text-gray-800">
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Responsive;
