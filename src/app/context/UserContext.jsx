'use client'
import { createContext, useState } from 'react';
import toast from "react-hot-toast";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [ContactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '', 
    comment: '',
  });
  const [loading,setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  });


  const [agentformData, setagentformData] = useState({
    name: '',
    agencyname: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    services: '',
    comments: ''
  });

  const [agenterrors, setagenterrors] = useState({});
  const [NewsletterForm, setNewsletterForm] = useState({email:""});
  const [newsletterErrors, setNewsletterErrors] = useState({ email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // Regex Patterns
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/; // 10-digit phone for phone
    const subjectPattern = /.+/; // Checks for non-empty input

    // Validate Form
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "", subject: "" };
    
  

    if (!namePattern.test(ContactForm.name)) {
      newErrors.name = "Please enter a valid name (letters and spaces only).";
      isValid = false;
    }
    if (!emailPattern.test(ContactForm.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }
    if (!phonePattern.test(ContactForm.phone)) {
      newErrors.phone = "Please enter a valid 10-digit contact phone.";
      isValid = false;
    }
    if (!subjectPattern.test(ContactForm.subject)) {
      newErrors.subject = "Please enter a subject.";
      isValid = false;
    
      if (!ContactForm.comments) {
        newErrors.comments = "Please enter your comments.";
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (isValid) {
      try{
        const response = await axios.post("https://backend-of-abroad-educares.vercel.app/api/v1/EnquiryForm", ContactForm);
        console.log(response);
        if(response.status === 200){
            toast.success("Form submitted successfully");
        }

      }
        catch(error){
            toast.error("Error submitting form",error);
            console.log(error);
        }
      console.log("Form Submitted:", ContactForm);

      // Reset Form after successful submission
      setContactForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        comment:"",
      });
    }
    setLoading(false)
  };


  
  const handleSubmitAgent = async (e) => {
    e.preventDefault();
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/; // 10-digit phone for phone
       // Validate Form
       let isValid = true;
       setLoading(true)
       const newagenterrors = { };

       if (!namePattern.test(agentformData.name)) {
        newagenterrors.name = "Please enter a valid name (letters and spaces only).";
        isValid = false;
      }
       if (!namePattern.test(agentformData.agencyname)) {
        newagenterrors.agencyname = "Please enter a valid agency name (letters and spaces only).";
        isValid = false;
      }
       if (!namePattern.test(agentformData.city)) {
        newagenterrors.city = "City is required.";
        isValid = false;
      }
       if (!namePattern.test(agentformData.state)) {
        newagenterrors.state = "State is required.";
        isValid = false;
      }
       if (!namePattern.test(agentformData.services)) {
        newagenterrors.services = "Atleast one service is required.";
        isValid = false;
      }
      if (!emailPattern.test(agentformData.email)) {
        newagenterrors.email = "Please enter a valid email.";
        isValid = false;
      }
      if (!phonePattern.test(agentformData.phone)) {
        newagenterrors.phone = "Please enter a valid 10-digit contact phone.";
        isValid = false;
      }
    
      
        if (!agentformData.comments) {
          newagenterrors.comments = "Please enter your comments.";
          isValid = false;
        }
      
  
        setagenterrors(newagenterrors);
        if(isValid){
          try{
            const response = await axios.post("https://backend-of-abroad-educares.vercel.app/api/v1/AgentForm", agentformData);
            console.log(response);
            if(response.status === 200){
                toast.success("Form submitted successfully");
            }
  
          }
            catch(error){
                toast.error("Error submitting form",error);
                console.log(error);
            }
          console.log("Form Submitted:", agentformData);
  
          // Reset Form after successful submission
          setagentformData({
            name: "",
            agencyname: "",
            email: "",
            phone: "",
            city: "",
            state: "",
            services: "",
            comments:"",
          });
        }
        setLoading(false)
  };

  
  const handleSubmitNewsletter = async (e) => {
    e.preventDefault();

    // Validate NewsletterForm email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isNewsletterValid = true;
    const newNewsletterErrors = { email: "" };

    if (!emailPattern.test(NewsletterForm.email)) {
      newNewsletterErrors.email = "Please enter a valid email for the newsletter.";
      isNewsletterValid = false;
    }

    setNewsletterErrors(newNewsletterErrors);

    if (isNewsletterValid) {
      try {
        const response = await axios.post("https://backend-of-abroad-educares.vercel.app/api/v1/NewsLetter", NewsletterForm);
        console.log(response);
        if (response.status === 200) {
          toast.success("Newsletter subscription successful");
          setNewsletterForm({ email: "" });
        }
      } catch (error) {
        toast.error("Error subscribing to newsletter");
        console.error(error);
      }
    }
    
  };
  
  return (
    <UserContext.Provider value={{ContactForm,setContactForm,handleSubmit,errors,setErrors,newsletterErrors,handleSubmitNewsletter,NewsletterForm,setNewsletterForm,setNewsletterErrors,agentformData,setagenterrors,agenterrors,setagentformData,handleSubmitAgent,loading}}>
      {children}
    </UserContext.Provider>
  );
};