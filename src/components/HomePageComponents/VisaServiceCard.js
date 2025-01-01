import React from "react";
import Button from "@/components/Button";
import PassportwithTicket from "@public/assets/images/HomePage/PassportwithTicket.jpg";
const VisaServiceCard = () => {
  return (
    
      <div className="flex w-[90%] md:w-[90%] xl:w-[85%] mx-auto bg-white shadow-2xl relative z-5">
        <div className="w-full lg:w-[55%] p-5 my-5 sm:my-5 sm:m-5 md:m-8">
          <div className="px-2 sm:px-0 w-full">
            <h3 className="text-blue-700 uppercase font-regular text-md">
            we are ready to help you
            </h3>
            <div className="my-6 flex gap-5">
              {/* White line */}
              <div className="w-[0.3rem] bg-blue-600"></div>
              <div className="w-full block md:flex items-center ">
                <h2 className="text-[2.2rem] lg:text-[2.6rem] font-light">
                  Free Online
                </h2>
                  <h2 className="font-black md:ml-3 text-gray-800 lg:leading-none text-[2.2rem] lg:text-[2.6rem]">
                    Visa Service
                  </h2>
              </div>
            </div>
            <p className="text-sm mb-5 text-gray-800">
            We can assist you regardless of your present location.We can assist you through phone or Skype thanks to our online consultation. Our customers can always count on us.
        </p>

        <Button text="Contact Us" borderColor="border-blue-700" textColor="text-black" href="/Contact"/>
          </div>
        </div>
        <div
  className="w-full lg:w-[45%] bg-cover bg-center lg:block hidden"
  style={{
    backgroundImage: `url(${PassportwithTicket.src})`,
  }}
>
  {/* Add any content here if needed */}
</div>


     
    </div>
  );
};

export default VisaServiceCard;
