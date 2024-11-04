'use client'
import { createContext, useState } from 'react';
import toast from "react-hot-toast";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [MainForm, setMainForm] = useState({
    name: '',
    email: '',
    number: '',
    subject: '', 
    comments: '',
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    comments: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regex Patterns
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberPattern = /^\d{10}$/; // 10-digit number for phone
    const subjectPattern = /.+/; // Checks for non-empty input

    // Validate Form
    let isValid = true;
    const newErrors = { name: "", email: "", number: "", subject: "" };

    if (!namePattern.test(MainForm.name)) {
      newErrors.name = "Please enter a valid name (letters and spaces only).";
      isValid = false;
    }
    if (!emailPattern.test(MainForm.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }
    if (!numberPattern.test(MainForm.number)) {
      newErrors.number = "Please enter a valid 10-digit contact number.";
      isValid = false;
    }
    if (!subjectPattern.test(MainForm.subject)) {
      newErrors.subject = "Please enter a subject.";
      isValid = false;
    
      if (!MainForm.comments) {
        newErrors.comments = "Please enter your comments.";
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (isValid) {
      toast.success("Form submitted successfully");
      console.log("Form Submitted:", MainForm);

      // Reset Form after successful submission
      setMainForm({
        name: "",
        email: "",
        number: "",
        subject: "",
      });
    }
  };

  return (
    <UserContext.Provider value={{MainForm,setMainForm,handleSubmit,errors,setErrors}}>
      {children}
    </UserContext.Provider>
  );
};