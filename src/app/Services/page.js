import React from 'react'
import passpost_with_plane from '@public/assets/images/ServicesPage/passport_with_plane.jpg'
import Link from 'next/link'
import { FaGraduationCap, FaMapMarkedAlt, FaUserTie,FaUsers   } from "react-icons/fa";
import { FaSackDollar,FaHouseChimney  } from "react-icons/fa6";
import Timeline from '@/components/ServicesComponent/Timeline'
const page = () => {
  const GreatVisaContent = [
    {
      title: "Study Visa",
      text: "Access opportunity to world-class education by studying in international university and colleges and pave your way towards the permanent residency of that country.",
      icon:<FaGraduationCap  size={45}
      className="text-blue-700 group-hover:text-white"/>,  
    },
    {
      title: "Business Visa",
      text: "There are a number of visas available for businesses. Each has its own legislative requirements but we can help you navigate through the jargon and submit the strongest possible application.",
      icon:<FaSackDollar  size={45}
      className="text-blue-700 group-hover:text-white"/>,  
    },
   
    {
      title: "Tourist Visa",
      text: "Our Immigration Team can help you to Travel the world with Tourist Visa allows immigrants to enjoy grandeur beauty &amp; Culture of the nation.",
      icon:<FaMapMarkedAlt  size={45}
      className="text-blue-700 group-hover:text-white"/>,  
    },
  ]

  return (
    <>
     <section
        style={{
          backgroundImage: `url(${passpost_with_plane.src})`, // If the image is imported
        }}
        className="bg-no-repeat relative bg-center bg-cover w-full h-[25rem] flex items-center justify-center"
      >
        {/* Black overlay with reduced opacity */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-55 z-0"></div>

        {/* Text content with increased z-index for visibility */}
        <div className="relative z-10 w-full flex flex-col  items-center gap-5 text-white">
          <h2 className="font-extrabold text-5xl md:text-6xl uppercase">
            Our Services
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
                <Link href="/Services" className=" hover:underline">
                  Services
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </section>

{/* Choose your visa */}
      <section className="my-20 py-10">
        <div className="w-[90%] md:w-[90%] xl:w-[85%] mx-auto">
          <div className="text-center">
            <h4 className="text-blue-700 uppercase font-regular text-md">
            Choose Your Visa
            </h4>

            <h3 className="text-[2.2rem] lg:text-[2.6rem] font-light">
            We Provide Our Experts To
             
            </h3>
            <h3 className="font-black text-gray-800 lg:leading-none text-[2rem] lg:text-[2.6rem]">
            Generate Great Visa
              </h3>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* below one is Our Location */}
            {GreatVisaContent.map((item,index)=>(
 <div className="group flex flex-col   border-[0.1px] border-blue-700 p-8 md:p-12 hover:border-blue-700 hover:bg-blue-700 transition-all duration-300" key={index}>
 {item.icon}
 <h3 className="font-bold text-xl text-gray-800 py-3  group-hover:text-white">
   {item.title}
 </h3>
 <p className="text-sm mb-5 text-gray-700   group-hover:text-white">
   {item.text}
 </p>
</div>
            ))

          
           

           
}
         
           
          </div>
        </div>
      </section>

      <Timeline/>
    </>
  )
}

export default page