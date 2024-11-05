"use client"
import React,{useContext} from "react";
import whiteLogo from "@public/whiteLogo.png";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import world_map from "@public/assets/images/HomePage/world_map.png";
import Button from "@/components/Button";
import Link from "next/link";
import { UserContext } from '../app/context/UserContext';
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const {newsletterErrors,handleSubmitNewsletter,setNewsletterForm,NewsletterForm,setNewsletterErrors}=useContext(UserContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsletterForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setNewsletterErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error on change
  };

  return (
    <footer className="">
      {/* Footer Top */}
      <div className="relative w-full mt-20 pt-10">
        <div className="relative w-[90%] md:w-[90%] xl:w-[85%] mx-auto block lg:flex items-center p-10 lg:p-20 shadow-lg bg-gray-800 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${world_map.src})`,
              opacity: 0.4, // Adjust the opacity to make the background visible
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 text-white w-full lg:w-[75%]">
            <h3 className="text-[1.475rem] md:text-[1.675rem] lg:text-3xl md:font-extralight">
              Are you looking for any kind of a{" "}
              <span className="font-extrabold">{""}Consultation{""}</span>{" "}
              around your profile? Just Call Us
            </h3>
            <p className="mt-2 font-light">
              Need A Consultation? Call us today +91-9501919187 or email us:
              support@abroadeducares.com
            </p>
          </div>
          <div className="relative z-10 mt-5 lg:mt-0 lg:ml-auto">
            <Button text="Contact Us" textColor="text-white" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-white -mt-32">
        <div className="w-[90%] md:w-[90%] xl:w-[85%] pt-[13rem] mx-auto">
          {/* Logo and Description */}
          <div className="flex flex-col items-center text-center">
            <img
              src={whiteLogo.src}
              alt="abroad educares logo"
              className="w-[12rem]"
            />
            <h5 className="font-bold text-sm mt-5">Welcome to Abroad Educares.</h5>
            <p className="text-sm font-normal w-[80%] md:w-[40%]">
              WE HELP YOU REACH YOUR DESIRED COUNTRY Whether study Visa, tourist
              Visa or immigration Opportunities, we know it all and our expert
              advisors guide you through the complete process with ease and
              transparency.
            </p>
            <div className="flex items-center justify-center gap-5 my-5">
              <a>
                <FaFacebookF />
              </a>
              <a>
                <FaLinkedin />
              </a>
              <a>
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-y border-white border-opacity-25 py-20">
            {/* Links and Other Sections */}
            <nav className="w-full md:w-auto">
              <h6 className="font-bold mb-4 text-xl">Important Links</h6>
              <ul className="list-none">
                <li className="mb-2">
                  <Link href="/About" className="flex items-center text-sm font-normal hover:text-blue-600 transition-all duration-300 cursor-pointer">
                    <span className="mr-2 text-blue-600 text-2xl">{">"}</span>{" "}
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/Blog" className="flex items-center text-sm font-normal hover:text-blue-600 transition-all duration-300 cursor-pointer">
                    <span className="mr-2 text-blue-600 text-2xl">{">"}</span>{" "}
                    Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/Visa" className="flex items-center text-sm font-normal hover:text-blue-600 transition-all duration-300 cursor-pointer">
                    <span className="mr-2 text-blue-600 text-2xl">{">"}</span>{" "}
                    Visa
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className="w-full md:w-auto">
              <h6 className="font-bold mb-4 text-xl">Support</h6>
              <ul className="list-none">
                <li className="mb-2">
                  <Link href="/Contact" className="flex items-center text-sm font-normal hover:text-blue-600 transition-all duration-300 cursor-pointer">
                    <span className="mr-2 text-blue-600 text-2xl">{">"}</span>{" "}
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className="w-full md:w-auto">
              <h6 className="font-bold mb-4 text-xl">Contact</h6>
              <ul className="list-none">
                <li className="mb-2">
                  <div className="flex items-center text-sm font-normal hover:text-blue-600 transition-all duration-300">
                    <span className="mr-2 text-blue-600">{">"}</span> La Prisma
                    Market, Nagla Rd, Zirakpur, Punjab
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center text-sm font-normal hover:text-blue-600 transition-all duration-300">
                    <span className="mr-2 text-blue-600">{">"}</span>{" "}
                    +91-9501919187
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center text-sm font-normal hover:text-blue-600 transition-all duration-300">
                    <span className="mr-2 text-blue-600">{">"}</span>{" "}
                    support@abroadeducares.com
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center text-sm font-normal hover:text-blue-600 transition-all duration-300">
                    <span className="mr-2 text-blue-600">{">"}</span> Mon - Sat
                    : 09:00 AM - 06:00 PM
                  </div>
                </li>
              </ul>
            </nav>

            <form className="w-full md:w-auto"   onSubmit={handleSubmitNewsletter}>
              <h6 className="font-bold text-xl">Subscribe to Our Newsletter</h6>
              <fieldset>
                <p className="text-sm font-normal my-4">
                  At Abroad Educares, we believe in providing an honest opinion
                  to our clients with complete transparency. Our team performs
                  their duties with utmost perfection.
                </p>
                <div className="flex">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    className="flex-1 mr-2 p-2 text-gray-800 text-sm border-none outline-none placeholder:text-sm placeholder:font-normal placeholder:opacity-70"
                    value={NewsletterForm.name}
                    onChange={handleChange}
                  
                  />
                  <button className="p-2 px-5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-2xl" type="submit">
                    {">"}
                  </button>
                </div>
                {newsletterErrors.email && (
            <p className="text-red-500 text-sm mt-1">{newsletterErrors.email}</p>
          )}
              </fieldset>
              <Toaster />
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="">
          <p className="text-sm font-normal text-white text-center py-10 px-2">
            Copyright © 2021 Abroad Educares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
