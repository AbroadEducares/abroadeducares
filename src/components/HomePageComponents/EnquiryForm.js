import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function EnquiryForm() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    number: '',
    state: '',
  });

  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleFocus = (e) => {
    setFocusedField(e.target.id);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formValues);
    // Handle form submission here
  };

  return (
    <div className="w-[90%] sm:w-[80%] max-w-lg mx-auto">
    
      <form
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 border  border-gray-300"
        onSubmit={handleSubmit}
      >
        <div className='pt-4 pb-8'>

      <h2 className="text-2xl font-bold text-start ">Enquiry Now</h2>
        <div className='w-8 h-1 rounder-full bg-blue-600'></div>
        </div>
        <div
          className={`mb-8 flex items-center border rounded ${
            focusedField === 'name' ? 'border-blue-500' : 'border-gray-300'
          }`}
        >
          <FaUser
            className={`text-gray-500 mr-2 ml-2 ${focusedField === 'name' ? 'text-blue-500' : ''}`}
          />
          <input
            className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formValues.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div
          className={`mb-8 flex items-center border rounded ${
            focusedField === 'email' ? 'border-blue-500' : 'border-gray-300'
          }`}
        >
          <FaEnvelope
            className={`text-gray-500 mr-2 ml-2 ${focusedField === 'email' ? 'text-blue-500' : ''}`}
          />
          <input
            className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div
          className={`mb-8 flex items-center border rounded ${
            focusedField === 'number' ? 'border-blue-500' : 'border-gray-300'
          }`}
        >
          <FaPhoneAlt
            className={`text-gray-500 mr-2 ml-2 ${focusedField === 'number' ? 'text-blue-500' : ''}`}
          />
          <input
            className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
            id="number"
            type="tel"
            placeholder="Enter your number"
            value={formValues.number}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div
          className={`mb-8 flex items-center border rounded ${
            focusedField === 'state' ? 'border-blue-500' : 'border-gray-300'
          }`}
        >
          <FaMapMarkerAlt
            className={`text-gray-500 mr-2 ml-2 ${focusedField === 'state' ? 'text-blue-500' : ''}`}
          />
          <input
            className="appearance-none border-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
            id="state"
            type="text"
            placeholder="Enter your state"
            value={formValues.state}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-600 hover:bg-blue-700 transiton-all duration-300 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnquiryForm;
