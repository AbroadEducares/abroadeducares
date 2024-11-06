"use client"
import React, { useContext } from 'react';
import Link from 'next/link';
import handshake from '@public/assets/images/AgentPage/handshake.jpg';
import GetStartedImage from '@public/assets/images/AgentPage/GetStartedImage.jpg';
import { UserContext } from '../../app/context/UserContext';

const page = () => {
  const {agentformData,setagenterrors,agenterrors,setagentformData,handleSubmitAgent}=useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setagentformData({
      ...agentformData,
      [name]: value
    });
    setagenterrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };
  const inputClassName = (error) =>
    `w-full border-[0.1px] border-gray-400 p-3 placeholder-opacity-70 focus:border-blue-700 focus:outline-none ${
      error ? 'border-red-500 mb-1' : 'mb-5'
    }`;

  

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${handshake.src})`
        }}
        className="bg-no-repeat relative bg-center bg-cover w-full h-[25rem] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-55 z-0"></div>
        <div className="relative z-10 w-full flex flex-col items-center gap-5 text-white">
          <h2 className="font-extrabold text-5xl md:text-6xl uppercase">Become Our Agent</h2>
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2 text-white">
              <li>
                <Link href="/" className=" hover:underline">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/About" className=" hover:underline">
                  Become Our Agent
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section>
        <div className="w-[90%] md:w-[90%] xl:w-[85%] flex lg:flex-row flex-col-reverse items-center mt-20 pt-10 mx-auto">
          <div
            className="lg:w-[50%] w-full bg-no-repeat bg-center bg-cover md:h-[730px] h-[400px]"
            style={{ backgroundImage: `url(${GetStartedImage.src})` }}
          ></div>
          <div className="lg:w-[50%] w-full shadow-md h-[max-content] p-12">
            <form onSubmit={handleSubmitAgent}>
              <div className="px-2 sm:px-0 w-full">
                <div className="my-6 flex gap-5">
                  <div className="w-[0.3rem] bg-blue-600"></div>
                  <div className="w-full block md:flex items-center ">
                    <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">Get</h2>
                    <h2 className="font-black md:ml-3 text-gray-800 lg:leading-none text-[2.2rem] lg:text-[2.6rem]">
                      Started
                    </h2>
                  </div>
                </div>
              </div>

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={agentformData.name}
                onChange={handleChange}
                className={inputClassName(agenterrors.name)}
              />
              {agenterrors.name && <p className="text-red-600 text-sm mb-5">{agenterrors.name}</p>}

              <input
                type="text"
                name="agencyname"
                placeholder="Agency Name"
                value={agentformData.agencyname}
                onChange={handleChange}
                className={inputClassName(agenterrors.agencyname)}
              />
                 {agenterrors.agencyname && <p className="text-red-600 text-sm mb-5">{agenterrors.agencyname}</p>}
              <div className="flex gap-5">
                <div className='w-[50%]'>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={agentformData.email}
                  onChange={handleChange}
                  className={inputClassName(agenterrors.email)}
                />
                {agenterrors.email && <p className="text-red-600 text-sm mb-5">{agenterrors.email}</p>}
                </div>
                <div className='w-[50%]'>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact No."
                  value={agentformData.phone}
                  onChange={handleChange}
                  className={inputClassName(agenterrors.phone)}
                />
                {agenterrors.phone && <p className="text-red-600 text-sm mb-5">{agenterrors.phone}</p>}
                </div>
              </div>

              <div className="flex gap-5">
                <div className='w-[50%]'>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={agentformData.city}
                  onChange={handleChange}
                  className={inputClassName(agenterrors.city)}
                />
                {agenterrors.city && <p className="text-red-600 text-sm mb-5">{agenterrors.city}</p>}
                </div>
                <div className='w-[50%]'>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={agentformData.state}
                  onChange={handleChange}
                  className={inputClassName(agenterrors.state)}
                />
                {agenterrors.state && <p className="text-red-600 text-sm mb-5">{agenterrors.state}</p>}
              </div>
              </div>

              <input
                type="text"
                name="services"
                placeholder="services you are interested in"
                value={agentformData.services}
                onChange={handleChange}
                className={inputClassName(agenterrors.services)}
              />
                {agenterrors.services && <p className="text-red-600 text-sm mb-5">{agenterrors.services}</p>}
              <textarea
                name="comments"
                placeholder="Comments"
                value={agentformData.comments}
                onChange={handleChange}
                className="w-full border-[0.1px] border-gray-400 p-3 mb-5 placeholder-opacity-70 focus:border-blue-700 focus:outline-none"
                rows={4}
              />

              <button
                className="bg-blue-700 text-white py-3 w-full uppercase border-[0.5px] hover:bg-white hover:border-blue-700 hover:text-blue-700 transition-all duration-300"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
