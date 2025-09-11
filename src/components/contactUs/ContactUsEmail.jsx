import React, { useEffect, useState } from "react";
import contactImage from "../../assets/contactUs/contact-image.svg"
import { addContact, getAllContacts } from "../../API/contactAPI";
import { toast } from "react-toastify";

const WARN = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
      
const SUCCESS = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }
const ContactUsEmail = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    service: "",
    message: "",
  });
  const allowedServices = [
    "Products For Real-life problems",
    "Digital Advisory",
    "AI Enablement",
    "App Developemnt and Support",
    "UI/UX Consulting and Revamp",
    "Performance Tuning",
    "Business Automation"
  ];
  const isValidPhone = (phone) => {
    const regex = /^\+\d{1,3}\d{6,12}$/;
    return regex.test(phone);
  };

  const fetchContacts = async () => {
    const data = await getAllContacts();
    console.log(data)
  };
  useEffect(()=>{
    fetchContacts()
  },[])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    if(!formData.service){
      toast.warn("Please select a service to proceed",WARN);
      return;
    }
    if (!isValidPhone(formData.phone_number)) {
      toast.warn('Please enter a valid phone number with country code. Example: +91xxxxxxxxxx', WARN);
      return;
    }
    const response = await addContact(formData)
    toast.success('Contact Information saved successfully!', SUCCESS);
    setFormData({
      name: "",
      email: "",
      phone_number: "",
      service: "",
      message: "",
    });
    console.log("Form submitted:", formData);
  };
  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-5xl manrope-bold text-center text-[#4B371C] mb-12">
          Let's get you started
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src={contactImage}
              alt="Contact Illustration"
              className="w-full max-w-md rounded-4xl shadow-lg"
            />
          </div>

          {/* Right: Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 text-sm ibm-plex-sans-normal focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 text-sm ibm-plex-sans-normal focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone_number"
              placeholder="Phone number *"
              required
              value={formData.phone_number}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />

            {/* Services Dropdown */}
            <select
                name="service"
                onChange={handleChange}
                value={formData.service}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm ibm-plex-sans-normal focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            >
              <option value="">Services</option>
                {allowedServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
            </select>

            {/* Message */}
            <textarea
              placeholder="Message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 text-sm ibm-plex-sans-normal focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />

            {/* Button */}
            <button
              type="submit"
              className="bg-[#E7E62A] cursor-pointer hover:scale-103 text-[#202020] ibm-plex-sans-regular rounded-full py-2 transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsEmail;