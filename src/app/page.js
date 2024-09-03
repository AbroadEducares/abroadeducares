"use client";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import EnquiryForm from "@/components/HomePageComponents/EnquiryForm";
import HeroImg from "@public/assets/images/HomePage/HeroImg.jpg";
import Button from "@/components/Button";
export default function HomePage() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <section className="relative h-[80rem] sm:h-[70rem] md:h-[65rem] lg:h-[65rem] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#000080] via-[#000080] to-[#000080] brightness-[0.65]"
          style={{
            backgroundImage: `url(${HeroImg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between sm:px-4 md:px-4 lg:px-8 relative z-10">
          <div className="text-white px-2 sm:px-0 w-full lg:w-1/2">
            <h3 className="uppercase font-medium text-xl">Abroad Educare</h3>
            <div className="mt-4 flex gap-5 ">
              {/* white line */}
            <div className="w-[0.3rem]  bg-white"></div>
            <div className="w-full lg:w-[80%]" >
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
            <Button text="discover more"/>
          </div>
          <div className="w-full  lg:w-1/2 mt-8  lg:mt-0">
            {/* Enquiry form */}
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Immigration experts section */}
      <section>
        <div>
          <p>Don’t Hesitate, Contact us for Better Help and Services. <span>Explore All Categories.</span></p>
        </div>

        {/* below div contain, Immigration Experts, Apply Online Visa, Immigration Experts */}
        <div>
          <div>
            <div>
              <h4>01.</h4>
            </div>
            <div>
              <h2>Immigrations Experts</h2>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
}
