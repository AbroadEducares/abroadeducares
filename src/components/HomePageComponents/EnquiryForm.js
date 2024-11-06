"use client";
import React, { useState, useContext } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaBook,FaChevronDown } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from '../../app/context/UserContext';

function EnquiryForm() {
  const { eduFair, setEduFair, handleEduFiarSubmit, eduFairErrors, setEduFairErrors } = useContext(UserContext);
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEduFair((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    setEduFairErrors((preveduFairErrors) => ({ ...preveduFairErrors, [id]: "" })); // Clear error on change
  };

  const handleFocus = (e) => {
    setFocusedField(e.target.id);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  return (
    <div className="w-[90%] sm:w-[80%] max-w-lg mx-auto">
      <form
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 border border-gray-300"
        onSubmit={handleEduFiarSubmit}
      >
        <div className="pt-4 pb-8">
          <h2 className="text-2xl font-bold text-start">Apply Now!</h2>
          <div className="w-8 h-1 rounded-full bg-blue-600"></div>
        </div>

        {/* Name Input */}
        <div className="mb-8">
          <div
            className={`flex items-center border rounded ${
              focusedField === "name" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <FaUser
              className={`text-gray-500 mr-2 ml-2 ${
                focusedField === "name" ? "text-blue-500" : ""
              }`}
            />
            <input
              className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={eduFair.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          {eduFairErrors.name && (
            <p className="text-red-500 text-sm mt-1">{eduFairErrors.name}</p>
          )}
        </div>

        {/* Email and Phone Inputs */}
        <div className="mb-8 flex gap-5">
          <div>
            <div
              className={`flex items-center border rounded ${
                focusedField === "email" ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <FaEnvelope
                className={`text-gray-500 mr-2 ml-2 ${
                  focusedField === "email" ? "text-blue-500" : ""
                }`}
              />
              <input
                className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
                id="email"
                type="email"
                placeholder="Your email"
                value={eduFair.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            {eduFairErrors.email && (
              <p className="text-red-500 text-sm mt-1">{eduFairErrors.email}</p>
            )}
          </div>
          <div>
            <div
              className={`flex items-center border rounded ${
                focusedField === "phone" ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <FaPhoneAlt
                className={`text-gray-500 mr-2 ml-2 ${
                  focusedField === "phone" ? "text-blue-500" : ""
                }`}
              />
              <input
                className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
                id="phone"
                type="tel"
                placeholder="Contact No."
                value={eduFair.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            {eduFairErrors.phone && (
              <p className="text-red-500 text-sm mt-1">{eduFairErrors.phone}</p>
            )}
          </div>
        </div>

        {/* Address and City Inputs */}
        <div className="mb-8">
          <div
            className={`flex items-center border rounded ${
              focusedField === "address" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <FaBook
              className={`text-gray-500 mr-2 ml-2 ${
                focusedField === "address" ? "text-blue-500" : ""
              }`}
            />
            <input
              className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
              id="address"
              type="text"
              placeholder="Enter your Residence Address"
              value={eduFair.address}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          {eduFairErrors.address && (
            <p className="text-red-500 text-sm mt-1">{eduFairErrors.address}</p>
          )}
        </div>

        <div className="mb-8">
          <div
            className={`flex items-center border rounded ${
              focusedField === "city" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <FaBook
              className={`text-gray-500 mr-2 ml-2 ${
                focusedField === "city" ? "text-blue-500" : ""
              }`}
            />
            <input
              className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
              id="city"
              type="text"
              placeholder="Enter your City"
              value={eduFair.city}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          {eduFairErrors.city && (
            <p className="text-red-500 text-sm mt-1">{eduFairErrors.city}</p>
          )}
        </div>

        {/* Last Level of Study Select */}
        <div className="mb-8">
          <div
            className={`flex items-center border rounded ${
              focusedField === "lastLevelOfStudy" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <FaBook
              className={`text-gray-500 mr-2 ml-2 ${
                focusedField === "lastLevelOfStudy" ? "text-blue-500" : ""
              }`}
            />
            <select
              id="lastLevelOfStudy"
              className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
              value={eduFair.lastLevelOfStudy}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              defaultValue=""
            >
              <option value="" disabled>Select your Last Level of Study</option>
              <option value="+2 (pursuing/passout)">+2 (pursuing/passout)</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation & above">Post Graduation & above</option>
            </select>
            <FaChevronDown className="text-gray-500 mr-2" />
          </div>
          {eduFairErrors.lastLevelOfStudy && (
            <p className="text-red-500 text-sm mt-1">{eduFairErrors.lastLevelOfStudy}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
          <Toaster />
        </div>
      </form>
    </div>
  );
}

export default EnquiryForm;
