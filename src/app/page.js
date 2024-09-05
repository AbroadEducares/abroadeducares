"use client";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import EnquiryForm from "@/components/HomePageComponents/EnquiryForm";
import HeroImg from "@public/assets/images/HomePage/HeroImg.jpg";
import Button from "@/components/Button";
import happyTravels from "@public/assets/images/HomePage/happyTravels.jpg";
import hat from "@public/assets/images/HomePage/hat.jpg";
import passport from "@public/assets/images/HomePage/passport.jpg";

export default function HomePage() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <section className="relative h-[85rem] sm:h-[80rem] md:h-[75rem] lg:h-[65rem] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#000080] via-[#000080] to-[#000080] brightness-[0.65]"
          style={{
            backgroundImage: `url(${HeroImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between sm:px-4 md:px-4 lg:px-8 relative z-10">
          <div className="text-white px-2 sm:px-0 w-full lg:w-1/2">
            <h3 className="uppercase font-medium text-xl">Abroad Educare</h3>
            <div className="mt-4 flex gap-5 ">
              {/* white line */}
              <div className="w-[0.3rem]  bg-white"></div>
              <div className="w-full lg:w-[80%]">
                <h1 className="leading-[4rem] lg:leading-none text-[3.4rem] text-5xl lg:text-7xl font-extralight">
                  A Global Exposure Consultancy for Students{" "}
                  <span className="font-bold">Schools and Colleges.</span>
                </h1>
              </div>
            </div>
            <p className="py-8 w-[70%]">
              Our forte lies in providing proper guidance and step-by-step
              method following to our clients for a seamless global journey.
            </p>
            <Button text="discover more" />
          </div>
          <div className="w-full  lg:w-1/2 mt-8  lg:mt-0">
            {/* Enquiry form */}
            <EnquiryForm />
          </div>
        </div>
      </section>  {/* Immigration experts section */}
      <section className="flex flex-col-reverse lg:flex-row relative w-full -mt-[5rem] z-30 ">
        <div className="w-full lg:w-[50%] flex items-end">
          <div className="ml-6 mt-8 lg:mt-0 lg:ml-10">
            <p>
Don’t Hesitate, Contact us for Better Help and Services.{" "}
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
      <section className="my-12 py-12">
        <div className="flex flex-row  justify-center gap-5">
          {/* left div */}
          <div className="w-[50%] flex items-center justify-center">
            {/* wrapper */}
            <div className="flex gap-4">
            <div className="flex flex-col gap-4 items-center justify-center">
              {/* below two are two img */}
              <div
                className="w-[17rem] h-[17rem]"
                style={{
                  backgroundImage: `url(${passport.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div   className="w-[17rem] h-[17rem]"
                style={{
                  backgroundImage: `url(${hat.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="flex items-center">
              {/* below div is for one image */}
              <div   className="w-[20rem] h-[30rem]"
                style={{
                  backgroundImage: `url(${happyTravels.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            </div>
          </div>

          {/* right div */}
          <div className="w-[50%] max-w-6xl">
          <div className="w-[95%] flex flex-col lg:flex-col ">
            <div className="px-2 sm:px-0 w-full ">
              <h3 className=" text-blue-700 uppercase font-regular text-md">
                About Abroad Educare
              </h3>
              <div className="mt-4 flex gap-5 ">
                {/* white line */}
                <div className="w-[0.3rem]  bg-blue-600"></div>
                <div className="w-full lg:w-[80%]">
                  <h2 className="lg:text-[2.6rem] font-light">
                    Immigration Services From
                  </h2>
                  <h2 className="font-black text-gray-800 lg:leading-none  lg:text-[2.6rem] ">
                    Experienced Staff
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-10 gap-4">
              <p className=" text-sm text-gray-800 text-wrap w-[40%]">
                Changes in immigration legislation are followed by everyone in
                our organization. Because of our many years of expertise, we are
                able to handle every matter swiftly and effectively. This is
                demonstrated by the constantly growing group of satisfied
                Clients.{" "}
              </p>
              <p className=" text-sm text-gray-800 text-wrap w-[40%]">
                Each case is unique, but we take the time to get to know our
                customers and find the best solution for them. We are licensed
                experts who are constantly expanding our expertise through
                professional development initiatives.{" "}
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
