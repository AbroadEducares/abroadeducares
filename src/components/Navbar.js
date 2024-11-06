"use client";
import React, { useState } from "react";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineAccessTimeFilled, MdEmail, MdLocationOn,MdMenuOpen, MdMenu,MdOutlineLocalPhone  } from "react-icons/md";
import logo from '@public/blackLogo.png';
import Link from 'next/link';
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header >
      {/* Top Bar */}
      <section className="bg-gray-800 hidden md:block px-0 md:px-2 lg:px-10 mx-auto lg:mx-0  py-1 text-white">
        <div className="w-[100%] flex justify-center lg:justify-between  items-center  py-2  px-0 ">
          <address className="not-italic text-sm font-light flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MdLocationOn size={20} />
              <span>La Prisma Market, Zirakpur</span>
            </div>
            <span className="w-[0.5px] h-6 bg-white opacity-40"></span>
           
            <div className="flex items-center space-x-1">
              <MdEmail size={20} />
              <Link href="mailto:support@abroadeducares.com">support@abroadeducares.com</Link> 
            </div>
            <span className="w-[0.5px] h-6 bg-white opacity-40"></span>

            <div className="flex items-center space-x-1">
              <MdOutlineAccessTimeFilled size={20} />
              <time dateTime="09:00-18:00">Mon - Sat: 09:00 AM - 06:00 PM</time>
            </div>
          </address>
          <div className="space-x-4 hidden lg:flex items-center">
            <Link href="https://www.facebook.com/abroadeducares" target="_blank" aria-label="Facebook">
              <FaFacebookF className="hover:text-blue-700 cursor-pointer transition-all duration-300"/>
            </Link> 
            <Link href="https://www.linkedin.com/company/abroad-educares/" target="_blank" aria-label="linkdin">
              <FaLinkedin className="hover:text-blue-700 cursor-pointer transition-all duration-300"/>
            </Link> 
            <Link href="https://www.instagram.com/officialabroadeducares" target="_blank" aria-label="Instagram">
              <FaInstagram className="hover:text-blue-700 cursor-pointer transition-all duration-300"/>
            </Link> 
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      <nav className="px-5 py-4">
        <div className="mx-auto flex justify-between items-center">
          <Link href="/" className="flex md:ml-5 items-center">
            <img
              src={logo.src} // replace with your logo
              alt="ABROAD EDUCARES Logo"
              className="h-8"
            />
           
          </Link> 

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8">
  <li className="group relative">
    <Link href="/About" className="text-black hover:text-orange-500">
      About Us
      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-orange-500 group-hover:w-full"></span>
    </Link>
  </li>
  {/* <li className="group relative">
    <Link href="#" className="text-black hover:text-orange-500">
      Coaching
      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-orange-500 group-hover:w-full"></span>
    </Link> 
  </li> */}
  <li className="group relative">
    <Link href="/Services" className="text-black hover:text-orange-500">
      Services
      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-orange-500 group-hover:w-full"></span>
    </Link> 
  </li>
  <li className="group relative">
    <Link href="/Agent" className="text-black hover:text-orange-500">
      Become Our Agent
      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-orange-500 group-hover:w-full"></span>
    </Link> 
  </li>
  <li className="group relative">
    <Link href="/Contact" className="text-black hover:text-orange-500">
      Contact
      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-orange-500 group-hover:w-full"></span>
    </Link> 
  </li>
</ul>


          {/* Contact Button */}
          <div className="hidden lg:flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300">
            <MdOutlineLocalPhone  className="mr-2" />
            <a href="tel:+919501919187" className="hover:underline transition-all duration-300">+91-9501919187</a> 
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            {showMenu ? (
              <MdMenuOpen onClick={()=> setShowMenu(!showMenu)} className="text-3xl text-black" />
            ) : (
              <MdMenu onClick={()=> setShowMenu(!showMenu)} className="text-3xl text-black" />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="lg:hidden bg-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="#" className="text-black hover:text-orange-500">About Us</Link> 
            </li>
            <li>
              <Link href="#" className="text-black hover:text-orange-500">Coaching</Link> 
            </li>
            <li>
              <Link href="#" className="text-black hover:text-orange-500">Visa</Link> 
            </li>
            <li>
              <Link href="#" className="text-black hover:text-orange-500">Blog</Link> 
            </li>
            <li>
              <Link href="#" className="text-black hover:text-orange-500">Contact</Link> 
            </li>
           
          </ul>
        </div>
      )}
    </header>
  );
}
