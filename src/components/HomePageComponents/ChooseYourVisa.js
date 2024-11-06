import React from 'react'
import { FaGraduationCap,FaMapMarkedAlt} from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
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