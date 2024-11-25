import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Button = ({text,textColor,borderColor,href}) => {
  return (
    <a className={`flex w-[12rem] items-center tracking-widest text-sm justify-center gap-2 uppercase border ${borderColor} pl-8 pr-6 py-3 ${textColor} hover:text-white hover:bg-blue-600 cursor-pointer transition-all duration-300 hover:border-blue-600`} href={href}>
      
        {text}
        <span><FaArrowRightLong />
        </span>
    </a>
  )
}

export default Button;