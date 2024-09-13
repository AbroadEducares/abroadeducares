import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Button = ({text,textColor,borderColor}) => {
  return (
    <button className={`flex items-center tracking-widest text-sm justify-center gap-2 uppercase border ${borderColor} pl-8 pr-6 py-3 ${textColor} hover:text-white hover:bg-blue-600 transition-all duration-300 hover:border-blue-600`}>
      
        {text}
        <span><FaArrowRightLong />
        </span>
    </button>
  )
}

export default Button;