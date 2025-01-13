import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; // Import the correct emailjs package
import Section from "./Section";
import Heading from "./Heading";
import { grid } from "../assets";
import Button from "./Button";
import globe from "../assets/4-small.png"


const ContactMe = () => {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_jl126ue";
    const templateId = "template_1jtmjad";
    const publicKey = "TmBr6nGPBL3gko2DM";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Shivam Shukla",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName(""); // Clear the name input
        setEmail(""); // Clear the email input
        setMessage(""); // Clear the message input
        setFormStatus("Message Sent SuccessFully!")
        setTimeout(() => {
          setFormStatus("");
        }, 3000);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };


  return (
    <Section
    className="pt-[12rem] -mt-[5.25rem] mt-14 mb-20"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="contact"
  >
      <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Contact Me"
        />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Form Section */}
        {/* <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-gray-300 mb-6">
            Feel free to reach out to me! I'd love to hear from you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
          {formStatus && (
            <p className="mt-4 text-center text-green-400">{formStatus}</p>
          )}
        </div> */}





                   <div
                      className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${"bg-conic-gradient"}`}
                      
                    >
                      <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                        <div className="absolute top-0 left-0 max-w-full">
                          <img
                            className="w-full"
                            src={grid}
                            width={550}
                            height={550}
                            alt="Grid"
                          />
                        </div>
                        <div className="relative z-1">
                        <div className="bg-transparent p-8 rounded-lg shadow-lg">
          {/* <h2 className="text-3xl font-bold mb-6">Contact Me</h2>  */}
          <p className="text-gray-300 mb-6">
            Feel free to reach out to me! I'd love to hear from you.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                onChange={(e)=>{setMessage(e.target.value)}}
              ></textarea>
            </div>
            <div>
              
                <Button href="#about" white className="w-full">
                <button
                type="submit"
                className="w-full"
              >
            {/* Get started */}
                Send Message
              </button>
          </Button>
            </div>
          </form>
          {formStatus && (
            <p className="mt-4 text-center text-green-400">{formStatus}</p>
          )}
        </div> 
                        </div>
                      </div>
                    </div>

        {/* Right: Image or Content Section */}
        <div className="flex justify-center items-center">
          <div className="w-full h-full max-w-lg">
            <img
              src={globe} // Replace with your image URL
              alt="Contact"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
