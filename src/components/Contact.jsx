import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hvs27r7",       // Replace with your EmailJS service ID
        "template_a72ajwj",      // Replace with your EmailJS template ID
        formRef.current,
        "UYc-cRy2E2HxVAyKv"     // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Slide,
          });
          formRef.current.reset();
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        () => {
          toast.error("❌ Failed to send message. Try again!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Slide,
          });
        }
      );
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-12">
          {/* Left - Text & Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold tracking-wide text-gray-700 uppercase mb-4">
              Contact us
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Connect with us, support <br /> for every need
            </h1>
            <p className="text-gray-600 mb-8">
              Have questions or need assistance? Our team is always ready to help
              you with quick and reliable support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-200 rounded-2xl p-6 flex flex-col items-start shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                <p className="text-sm text-gray-600">
                  1234 Horizon Avenue, Suite 500, Bogura, BN 94103 - Located in the heart of the tech district.
                </p>
              </div>
              <div className="bg-gray-200 rounded-2xl p-6 flex flex-col items-start shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Contact us!</h4>
                <p className="text-sm text-gray-600">+88 - 017 8528 6936</p>
              </div>
              <div className="bg-gray-200 rounded-2xl p-6 flex flex-col items-start shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-sm text-gray-600">neaz@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right - Image with Animation */}
          <div className="flex justify-center items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-lg group w-full h-auto">
              <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1758540611/contact-us-image_pnrac0.jpg"
                alt="Smartwatch on a wrist"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex justify-between overflow-hidden pointer-events-none">
                <div className="w-0 bg-white/30 h-full transition-all duration-500 group-hover:w-1/2"></div>
                <div className="w-0 bg-white/30 h-full transition-all duration-500 group-hover:w-1/2"></div>
              </div>
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <span className="text-xs font-semibold text-gray-200 uppercase mb-1">
                  Connect
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Get in touch
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left - Map */}
          <div className="w-full h-80 lg:h-full overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115454.12053185365!2d89.31346049870857!3d24.84713783965578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc56113b288c3b%3A0xcf953c0780f2d4f!2sBogura%20District%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1695420176312!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right - Contact Form */}
          <div className="flex flex-col bg-gray-100 p-8 rounded-3xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Send us a message
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-white p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-white p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
              <textarea
                name="message"
                placeholder="Write message..."
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-white p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-gray-800 transition duration-300"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toastify Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </div>
  );
};

export default Contact;
