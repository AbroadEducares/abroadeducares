import React from 'react'
import Link from 'next/link'
import handshake from '@public/assets/images/AgentPage/handshake.jpg'
import { FaPassport , FaGlobe  } from "react-icons/fa";
import GetStartedImage from "@public/assets/images/AgentPage/GetStartedImage.jpg";
const page = () => {
  return (
<>
<section
        style={{
          backgroundImage: `url(${handshake.src})`, // If the image is imported
        }}
        className="bg-no-repeat relative bg-center bg-cover w-full h-[25rem] flex items-center justify-center"
      >
        {/* Black overlay with reduced opacity */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-55 z-0"></div>

        {/* Text content with increased z-index for visibility */}
        <div className="relative z-10 w-full flex flex-col  items-center gap-5 text-white">
          <h2 className="font-extrabold text-5xl md:text-6xl uppercase">
           Become Our Agent
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
               Become Our Agent
                </Link>
              </li>
            </ol>
          </nav>
        </div>
</section>

{/* <section className="mt-20 py-10">
        <div className="mx-auto w-[90%] md:w-[90%] xl:w-[85%] flex flex-col-reverse lg:flex-row justify-center px-0 lg:px-4 xl:px-0">
        //  Left div
          <div className="lg:w-[50%] ml-5 max-w-6xl lg:px-0 flex flex-col lg:flex-col ">
            <div className="px-2 sm:px-0 w-full">
              <h3 className="text-blue-700 uppercase font-regular text-md">
             
Partner with Abroad Educare
              </h3>
              <div className="mt-4 flex gap-5">
              //  White line
                <div className="w-[0.3rem] bg-blue-600"></div>
                <div className="w-full lg:w-[80%]">
                  <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
                  Join a Network of Success
                  </h2>
                  <h2 className="font-black text-gray-800 lg:leading-none text-[2.2rem] lg:text-[2.6rem]">
                  with Abroad Educare
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-6 lg:mt-10 gap-4 w-full  lg:pl-0 lg:w-[80%]">
              <p className="text-sm text-gray-800">
              Partner with us and join a trusted network backed by Abroad Educare's industry expertise, empowering you to offer reliable immigration solutions to your clients with confidence.
              </p>
              <p className="text-sm text-gray-800">
              Our commitment to professional development keeps you updated on immigration regulations, helping you provide the best solutions for each unique client case. Expand your potential and make a meaningful impact!
              </p>
            </div>
            <div className="w-full lg:w-[80%]">
              <div className="flex my-10">
               // Icon
                <div className="bg-white shadow-md h-[fit-content] mr-5 py-2 px-2 border rounded-br-2xl">
                  <FaPassport  size={35} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-700">
                  Visa & Immigration Solutions for Your Clients
                  </h3>
                  <p className="text-sm text-gray-800 mt-1">
                  Expand your offerings with trusted visa solutions in Study, Business, and Tourism—empowering clients with seamless global access and growth opportunities.
                  </p>
                </div>
              </div>
              <div className="flex">
              //  Icon
                <div className="bg-white shadow-md h-[fit-content] mr-5 py-2 px-2 border rounded-br-2xl">
                  <FaGlobe  size={35} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-700">
                  Financial Services for Smooth International Transitions
                  </h3>
                  <p className="text-sm text-gray-800 mt-1">
                  Simplify your clients’ financial needs with tuition fee management, GIC, and secure block accounts, ensuring smooth support for their international aspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          Right div
         
          <div className="lg:w-[50%] w-full shadow-md h-[max-content] p-12">
          <form>
  <div className="px-2 sm:px-0 w-full">
    <h3 className="text-blue-700 uppercase font-regular text-md">
      Message us
    </h3>
    <div className="my-6 flex gap-5">
      //White line
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
      Consult with our experienced immigration consultants and move to your
      dream country. Just fill the enquiry form, and you will receive a call
      from one of our experts within 24 hours.
    </p>
  </div>

  <div>
    <input
      type="text"
      placeholder="Name"
      className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    />
  </div>
  <div>
    <input
      type="text"
      placeholder="Agency Name"
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
      type="tel"
      placeholder="Contact No."
      className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    />
  </div>
  <div className="flex gap-5">
    <input
      type="text"
      placeholder="City"
      className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    />
    <input
      type="text"
      placeholder="State"
      className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    />
  </div>
  <div>
    <input
      type="text"
      placeholder="Service you are interested in"
      className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    />
  </div>

  <textarea
    placeholder="Comments"
    className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    rows={5}
  />

  <button className="bg-blue-700 text-white py-3 w-full uppercase border-[0.5px] hover:bg-white hover:border-blue-700 hover:text-blue-700 transition-all duration-300" type="submit">
    Send Message
  </button>
</form>

          </div>
        </div>
      </section> */}

<section>
        <div className="w-[90%] md:w-[90%] xl:w-[85%]  flex lg:flex-row flex-col-reverse items-center  mt-20 pt-10 mx-auto ">
          <div className="lg:w-[50%] w-full bg-no-repeat bg-center bg-cover md:h-[730px] h-[400px]" style={{backgroundImage:`url(${GetStartedImage.src})`}}>
         
          </div>
          <div className="lg:w-[50%] w-full shadow-md h-[max-content] p-12">
          <form>
  <div className="px-2 sm:px-0 w-full">
    <div className="my-6 flex gap-5">
      {/* White line */}
      <div className="w-[0.3rem] bg-blue-600"></div>
      <div className="w-full block md:flex items-center ">
        <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
        Get 
        </h2>
        <h2 className="font-black md:ml-3 text-gray-800 lg:leading-none text-[2.2rem] lg:text-[2.6rem]">
        Started
        </h2>
      </div>
    </div>
  </div>

  <div>
    <input
      type="text"
      placeholder="Name"
      className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    />
  </div>
  <div>
    <input
      type="text"
      placeholder="Agency Name"
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
      type="tel"
      placeholder="Contact No."
      className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    />
  </div>
  <div className="flex gap-5">
    <input
      type="text"
      placeholder="City"
      className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    />
    <input
      type="text"
      placeholder="State"
      className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    />
  </div>
  <div>
    <input
      type="text"
      placeholder="Service you are interested in"
      className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    />
  </div>

  <textarea
    placeholder="Comments"
    className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
    rows={4}
  />

  <button className="bg-blue-700 text-white py-3 w-full uppercase border-[0.5px] hover:bg-white hover:border-blue-700 hover:text-blue-700 transition-all duration-300" type="submit">
    Submit
  </button>
</form>

          </div>
        </div>
      </section>
</>
  )
}

export default page