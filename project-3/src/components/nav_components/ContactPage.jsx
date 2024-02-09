// ContactPage.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; 

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div id="contact" className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen flex flex-col items-center justify-center">
      <div className="text-white p-4 md:p-8 text-center md:text-left md:w-1/2 md:mr-4 mb-4 md:mb-0">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-lg">
          Have questions or want to get in touch? We'd love to hear from you! Reach out
          to us through the contact information below or use the form to send us a message.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded mx-auto hover:bg-gray-700 block">Submit</button>
        </form>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center mt-8">
          <a
            href="https://www.facebook.com/people/Page-Nexus/pfbid02K5cJFHmvyVfaiJy99puZU1pp3VSXxx5QR33XnVhWb5DpHngkWurBZGW7pG3iQYYhl/?sk=about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/company/nexus-software-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://nexusinfo.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        {/* Email and Phone */}
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center mr-4">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-white mr-2" />
            <p className="text-white">contact.nexusinfo@gmail.com</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} size="lg" className="text-white mr-2" />
            <p className="text-white"> +91 8778993293</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
