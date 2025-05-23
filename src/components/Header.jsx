import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LiaSearchSolid, LiaTimesSolid, LiaBarsSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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
      setFormData({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setShowPopup(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    "Home",
    "About Us",
    "Services",
    "Our Games",
    "Blog",
    "Contact",
  ];

  return (
    <div className="overflow-auto">
      <header className="bg-[#0c0c35] text-white shadow-md sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex items-center justify-between">
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Galactic Squad"
                  className="h-12 sm:h-14 md:h-12 lg:h-20"
                />
              </div>
            </Link>
            <button
              className="md:hidden text-2xl focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <LiaTimesSolid /> : <LiaBarsSolid />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 font-semibold text-base lg:text-lg md:text-xs xl:text-xl md:flex">
            <ul className="flex gap-4 lg:gap-6 xl:gap-8">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative group uppercase hover-underline-animation text-gray-300 hover:text-white"
                >
                  <Link
                    to={`/${
                      item.toLowerCase().replace(/\s+/g, "-") === "home"
                        ? ""
                        : item.toLowerCase().replace(/\s+/g, "-")
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 md:mr-4 lg:mr-8">
            <LiaSearchSolid className="text-xl md:text-xl lg:text-3xl cursor-pointer" />
            <button
              onClick={() => setShowPopup(true)}
              className="relative px-4 md:px-2 lg:px-8 py-2 md:py-2 lg:py-4 text-white font-semibold text-sm md:text-xs lg:text-lg uppercase bg-btn shadow-lg hover:opacity-90 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Join Our Team</span>
              <span className="absolute right-0 top-0 w-4 md:w-5 h-4 md:h-5 bg-[#0a0a2a] -rotate-45 translate-x-1/2 -translate-y-1/2"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0c0c35] z-50 py-4 px-6 shadow-lg">
            <nav className="flex flex-col space-y-4 font-semibold">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={`/${
                    item.toLowerCase().replace(/\s+/g, "-") === "home"
                      ? ""
                      : item.toLowerCase().replace(/\s+/g, "-")
                  }`}
                  className="text-gray-300 hover:text-white uppercase py-2 border-b border-[#022C68]"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-between mt-6">
              <LiaSearchSolid className="text-2xl cursor-pointer" />
              <button
                onClick={() => setShowPopup(true)}
                className="relative px-6 py-3 text-white font-semibold text-base sm:text-sm lg:text-2xl uppercase bg-btn shadow-lg hover:opacity-90 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Join Our Team</span>
                <span className="absolute right-0 top-0 w-5 h-5 bg-[#0a0a2a] -rotate-45 translate-x-1/2 -translate-y-1/2"></span>
              </button>
            </div>
          </div>
        )}

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-white/10 bg-opacity-80 z-50 flex items-center justify-center px-4 py-8 lg:mt-28 md:mt-60 sm:mt-96">
            <div className="bg-black bg-opacity-90 p-6 sm:p-10 rounded-3xl shadow-xl max-w-4xl w-full relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-pink-500"
                aria-label="Close popup"
              >
                &times;
              </button>
              <h3 className="text-white text-3xl sm:text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full bg-gray-900 text-white text-2xl lg:text-2xl md:text-xl sm:text-sm border border-slate-700 rounded-md p-3 placeholder-gray-400"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-xl lg:text-xl md:text-lg sm:text-xs mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full bg-gray-900 text-white text-2xl lg:text-2xl md:text-xl sm:text-sm border border-slate-700 rounded-md p-3 placeholder-gray-400"
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-xl lg:text-xl md:text-lg sm:text-xs mt-1">
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full bg-gray-900 text-white text-2xl lg:text-2xl md:text-xl sm:text-sm border border-slate-700 rounded-md p-3 placeholder-gray-400"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-xl lg:text-xl md:text-lg sm:text-xs mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full bg-gray-900 text-white text-2xl lg:text-2xl md:text-xl sm:text-sm border border-slate-700 rounded-md p-3 placeholder-gray-400"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xl lg:text-xl md:text-lg sm:text-xs mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full bg-gray-900 text-white text-2xl lg:text-2xl md:text-xl sm:text-sm border border-slate-700 rounded-md p-3 placeholder-gray-400"
                    />
                    {formErrors.subject && (
                      <p className="text-red-500 text-xl lg:text-xl md:text-lg sm:text-xs mt-1">
                        {formErrors.subject}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full bg-gray-900 text-white text-2xl lg:text-2xl md:text-xl sm:text-sm border border-slate-700 rounded-md p-3 placeholder-gray-400"
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-xl lg:text-xl md:text-lg sm:text-xs mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>
                </div>

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
        )}
      </header>
    </div>
  );
};

export default Header;
