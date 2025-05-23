import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import bgImg from "../../assets/pattern1.png";
import Swal from "sweetalert2";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF />, label: "Facebook", to: "https://facebook.com" },
  { icon: <FaInstagram />, label: "Instagram", to: "https://instagram.com" },
  { icon: <FaTwitter />, label: "Twitter", to: "https://twitter.com" },
  { icon: <FaYoutube />, label: "YouTube", to: "https://youtube.com" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", to: "https://linkedin.com" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last Name is required";
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = "Phone must be 10 digits";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted Successfully:", formData);
      Swal.fire({
        title: "Success!",
        text: "Thank you! Your data has been submit.",
        icon: "success",
      });
      // Reset form
      setFormData({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div
      className="relative w-full bg-[#0c0c35] min-h-screen bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-[#0c0c35]/70 z-0" />
      <div className="relative z-10 mx-auto py-16 px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          {/* Left Side */}
          <div className="space-y-10">
            <h6 className="text-lg sm:text-lg md:text-2xl lg:text-2xl font-bold text-[#db79de] uppercase">
              Get In Touch
            </h6>
            <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-6xl  font-bold">
              Seamless Communication, Global Impact.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#acbad4]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="hidden sm:block border-t border-gray-600 my-6"></div>

            <div className="space-y-6">
              <h4 className="text-2xl">Follow our social media</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-gray-700 text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl hover:bg-[#db79de] transition-transform duration-300 transform hover:scale-110"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex justify-center items-center">
            <div className="bg-[#192130] space-y-5 py-8 px-8 rounded-3xl shadow-lg w-full max-w-4xl mx-auto">
              <h3 className="text-4xl sm:text-xl md:text-3xl font-bold text-white">
                Send us a message
              </h3>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 text-2xl lg:text-2xl md:text-xl sm:text-lg"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full p-3 bg-gray-900 text-white text-2xl sm:text-sm md:text-lg lg:text-2xl border border-gray-700 rounded"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-lg sm:text-sm lg:text-lg ">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <label className="text-white">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full p-3 bg-gray-900 text-white text-2xl sm:text-sm md:text-lg lg:text-2xl border border-gray-700 rounded"
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-lg sm:text-sm lg:text-lg ">
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <label className="text-white">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full p-3 bg-gray-900 text-white text-2xl sm:text-sm md:text-lg  lg:text-2xl border border-gray-700 rounded"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-lg sm:text-sm lg:text-lg ">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <label className="text-white">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full p-3 bg-gray-900 text-white text-2xl sm:text-sm md:text-lg  lg:text-2xl border border-gray-700 rounded"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-lg sm:text-sm lg:text-lg ">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-white">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full p-3 bg-gray-900 text-white text-2xl sm:text-sm md:text-lg  lg:text-2xl border border-gray-700 rounded"
                  />
                  {formErrors.subject && (
                    <p className="text-red-500 text-lg sm:text-sm lg:text-lg ">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-white">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full p-3 bg-gray-900 text-white text-2xl sm:text-sm md:text-lg  lg:text-2xl border border-gray-700 rounded"
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-lg sm:text-sm lg:text-lg ">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full py-2 sm:py-3 md:py-2 lg:py-4 font-sans text-white text-sm sm:text-base md:text-lg lg:text-2xl rounded-full font-medium bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] hover:from-[#2f85e5]/90 hover:to-[#ff2ef9]/90 transition-colors duration-200"
                  >
                    <div className="flex justify-center items-center tracking-wide sm:tracking-wider">
                      <MdOutlineMail className="mr-2 text-lg sm:text-xl md:text-xl lg:text-3xl" />
                      Submit
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
