"use Client"
import React,{ useContext } from "react";
import call_operator from "@public/assets/images/ContactPage/call_operator.jpg";
import Link from "next/link";
import { FaLocationDot, FaBriefcase } from "react-icons/fa6";
import { MdEmail, MdCall } from "react-icons/md";
import { UserContext } from '@/context/UserContext';
const Contact = () => {
    
  const {MainForm,setMainForm}=useContext(UserContext);

  return (
    <>
      {/* Hero section of the contact page */}
      <section
        style={{
          backgroundImage: `url(${call_operator.src})`, // If the image is imported
        }}
        className="bg-no-repeat relative bg-center md:bg-left-top bg-cover w-full h-[25rem] flex items-center justify-center"
      >
        {/* Black overlay with reduced opacity */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-55 z-0"></div>

        {/* Text content with increased z-index for visibility */}
        <div className="relative z-10 w-full flex flex-col  items-center gap-5 text-white">
          <h2 className="font-extrabold text-5xl md:text-6xl uppercase">
            Contact
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
                <Link href="/Contact" className=" hover:underline">
                  Contact
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* get in touch */}
      <section className="mt-20 ">
        <div className="w-[90%] md:w-[90%] xl:w-[85%] mx-auto">
          <div className="text-center">
            <h3 className="text-blue-700 uppercase font-regular text-md">
              contact us
            </h3>

            <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
              Get In{" "}
              <span className="font-black text-gray-800 lg:leading-none text-[2rem] lg:text-[2.6rem]">
                Touch
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
            {/* below one is Our Location */}
            <div className="group flex flex-col items-center justify-center border-[0.1px] border-blue-700 py-12 px-6 hover:border-blue-700 hover:bg-blue-700 transition-all duration-300">
              <FaLocationDot
                size={45}
                className="text-blue-700 group-hover:text-white"
              />
              <h3 className="font-bold text-xl text-gray-800 py-3 text-center group-hover:text-white">
                Our Location
              </h3>
              <p className="text-sm mb-5 text-gray-700 text-center w-[80%] group-hover:text-white">
                SCO No.4, First Floor, La Prisma Market Nagla Road,
                Zirakpur-140603
              </p>
            </div>

            {/* contact number */}
            <div className="group flex flex-col items-center justify-center border-[0.1px] border-blue-700 py-12 px-6 hover:border-blue-700 hover:bg-blue-700 transition-all duration-300">
              <MdCall
                size={45}
                className="text-blue-700 group-hover:text-white"
              />
              <h3 className="font-bold text-xl text-gray-800 py-3 text-center group-hover:text-white">
                Call Us
              </h3>
              <p className="text-sm mb-5 text-gray-700 text-center w-[80%] group-hover:text-white">
                Mobile : +91-9501919187
              </p>
            </div>

            {/*Email id  */}
            <div className="group flex flex-col items-center justify-center border-[0.1px] border-blue-700 py-12 px-6 hover:border-blue-700 hover:bg-blue-700 transition-all duration-300">
              <MdEmail
                size={45}
                className="text-blue-700 group-hover:text-white"
              />
              <h3 className="font-bold text-xl text-gray-800 py-3 text-center group-hover:text-white">
                Email Us
              </h3>
              <p className="text-sm mb-5 text-gray-700 text-center w-[80%] group-hover:text-white">
                support@abroadeducares.com
              </p>
            </div>

            {/* work hours */}
            <div className="group flex flex-col items-center justify-center border-[0.1px] border-blue-700 py-12 px-6 hover:border-blue-700 hover:bg-blue-700 transition-all duration-300">
              <FaBriefcase
                size={45}
                className="text-blue-700 group-hover:text-white"
              />
              <h3 className="font-bold text-xl text-gray-800 py-3 text-center group-hover:text-white">
                Work Hours
              </h3>
              <p className="text-sm mb-5 text-gray-700 text-center w-[80%] group-hover:text-white">
                Mon - Sat : 09:00 AM - 06:00 PM Sunday : Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <div className="w-[90%] md:w-[90%] xl:w-[85%]  flex lg:flex-row flex-col-reverse items-center  mt-20 pt-10 mx-auto ">
          <div className="lg:w-[50%] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.1462937960073!2d76.82388097536878!3d30.62983437463406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4659b2daa167ad89%3A0x199f1b11440e9fdb!2sAbroad%20Educares!5e0!3m2!1sen!2sin!4v1726409144692!5m2!1sen!2sin"
              className="w-full "
              height={750}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:w-[50%] w-full shadow-md h-[max-content] p-12">
            <form>
              <div className="px-2 sm:px-0 w-full">
                <h3 className="text-blue-700 uppercase font-regular text-md">
                  Message us
                </h3>
                <div className="my-6 flex gap-5">
                  {/* White line */}
                  <div className="w-[0.3rem] bg-blue-600"></div>
                  <div className="w-full block md:flex items-center ">
                    <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
                      Send A
                    </h2>
                    <h2 className="font-black md:ml-3 text-gray-800 lg:leading-none text-[2.2rem] lg:text-[2.6rem]">
                      Message
                    </h2>
                  </div>
                </div>
                <p className="text-sm mb-5 text-gray-800">
                  Consult with our experienced immigration consultants and move
                  to your dream country. Just fill the Enquiry form and you will
                  Receive a Call from one of our Experts within 24 Hours
                </p>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
                />
                <input
                  type="tele"
                  placeholder="Contact No."
                  className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
              />

              <textarea
                placeholder="Comments"
                className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
                rows={5}
              />

              <button className="bg-blue-700 text-white py-3 w-full uppercase border-[0.5px] hover:bg-white  hover:border-blue-700  hover:text-blue-700 transition-all duration-300" type="submi" onClick={()=>console.log(MainForm)}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
