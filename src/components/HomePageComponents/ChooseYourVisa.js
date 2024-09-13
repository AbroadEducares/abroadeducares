import React from 'react'
import { FaGraduationCap,FaMapMarkedAlt,FaUserTie,FaUsers } from "react-icons/fa";
import { FaHouseChimney,FaSackDollar } from "react-icons/fa6";
const ChooseYourVisa = () => {
    const ChooseyourVisaData = [
        {
            icon: <FaGraduationCap size={50} />,
            title: "Study Visa",
            para:"Access opportunity to world-class education by studying in international university and colleges and pave your way towards the permanent residency of that country.",
        },
        {
            icon: <FaMapMarkedAlt  size={45} />,
            title: "Tourist Visa",
            para:"Our Immigration Team can help you to Travel the world with Tourist Visa allows immigrants to enjoy grandeur beauty & Culture of the nation."
        },
        {
            icon:<FaHouseChimney size={45} />,
            title:"Visitor Visa",
            para:"A visitor visa grants temporary entry for tourism or short-term business, with restrictions on work or study. Its validity is subject to the purpose of visit and the issuing country's regulations."
        },
        {
            icon:<FaUserTie size={45} />,
            title:"Work Visa",
            para:"We will help you throughout the Immigration Process of your country of dreams. This also assisting you with a passive job search on the foreign land through our established contacts."
        },
        {
            icon:<FaSackDollar size={45} />,
            title:"Educational Trips",
            para:"Educational trips are immersive learning experiences that take students beyond the classroom, fostering practical knowledge and cultural understanding. They offer invaluable insights, enriching academic pursuits and personal growth."
        },
        {
            icon:<FaUsers size={45} />,
            title:"Student And Teacher Exchange programs",
            para:"Student and teacher exchange programs enable international learning experiences, fostering cultural understanding and academic collaboration, ultimately enriching both participants' educational journeys.",
        }

    ]
  return (
    <>
    {
        ChooseyourVisaData.map((data,index)=>(
            <div className='flex flex-col items-center justify-center border-[0.1px] border-gray-700 py-12 px-6 hover:border-blue-700 hover:text-white text-blue-700 transition-all duration-300' key={index}>
                

                {data.icon}

                <h3 className="font-bold text-xl text-white py-3 text-center">
                    {data.title}
                  </h3>
                  <p className="text-sm mb-5 text-white text-center w-[80%]">
           {data.para}
        </p>
            </div>
        ))
    }
    </>
  )
}

export default ChooseYourVisa