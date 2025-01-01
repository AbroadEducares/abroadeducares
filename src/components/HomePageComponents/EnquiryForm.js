"use client";
import React, { useState, useContext } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaBook,FaChevronDown } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from '../../app/context/UserContext';

function EnquiryForm() {
  
  const { ContactForm,setContactForm,handleSubmit,errors,setErrors,loading } = useContext(UserContext);
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContactForm((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    setErrors((preverrors) => ({ ...preverrors, [id]: "" })); // Clear error on change
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
        onSubmit={handleSubmit}
      >
        <div className="pt-4 pb-8">
          <h2 className="text-2xl font-bold text-start">Enquiry Now!</h2>
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
              value={ContactForm.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
                value={ContactForm.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
                value={ContactForm.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* subject*/}
        <div className="mb-8">
          <div
            className={`flex items-center border rounded ${
              focusedField === "subject" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <FaBook
              className={`text-gray-500 mr-2 ml-2 ${
                focusedField === "subject" ? "text-blue-500" : ""
              }`}
            />
            <input
              className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
              id="subject"
              type="text"
              placeholder="Enter your subject"
              value={ContactForm.subject}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

          {/* comment */}
        <div className="mb-8">
          <div
            className={`flex items-center border rounded ${
              focusedField === "comment" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <FaBook
              className={`text-gray-500 mr-2 ml-2 ${
                focusedField === "comment" ? "text-blue-500" : ""
              }`}
            />
            <input
              className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
              id="comment"
              type="text"
              placeholder="Enter your comment"
              value={ContactForm.comment}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          {errors.comment && (
            <p className="text-red-500 text-sm mt-1">{errors.comment}</p>
          )}
        </div>

       
   

        <div className="flex items-center justify-between">
        <button
            className={`${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } transition-all duration-300 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline`}
            type="submit"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Submitting..." : "Submit"} {/* Button text changes when loading */}
          </button>
          <Toaster />
        </div>
      </form>
    </div>
  );
}

export default EnquiryForm;
