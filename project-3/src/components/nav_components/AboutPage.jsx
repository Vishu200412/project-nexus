// AboutPage.jsx

import React from 'react';

const AboutPage = () => {
  return (
    <div id="about" className="bg-gradient-to-r from-gray-900 to-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="text-white p-4 md:p-8 text-center md:text-left md:w-3/4 lg:w-1/2 md:mr-4 mb-4 md:mb-0">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGm_I8Ooe_sqGx3VDX7oA6i9B1sOL6WCGNWQ&usqp=CAU"  // Replace with your company logo URL
          alt="Company Logo"
          className="mb-4 rounded-full w-24 h-24 object-cover"
        /> */}
        <p className="text-lg">
          Welcome to our tech company! We are passionate about leveraging technology to
          create innovative solutions that empower businesses and individuals. Here's a
          glimpse into who we are and what we stand for:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <InfoBox title="Mission" content="To simplify and enhance the way people interact with technology, making it accessible and beneficial to all." />
          <InfoBox title="Vision" content="To be a leading force in driving technological advancements that shape the future of industries and society." />
          <InfoBox title="Values" content="Innovation, Collaboration, Integrity, and Customer-Centricity guide our every endeavor." />
          <InfoBox title="Expertise" content="Specializing in areas such as software development, artificial intelligence, cybersecurity, and more." />
        </div>
        <p className="text-lg mt-4">
          At our core, we believe that technology has the power to transform lives, and
          we are committed to driving positive change through our solutions.
        </p>
      </div>

      {/* Additional content specific to the AboutPage */}
    </div>
  );
};

// InfoBox component
const InfoBox = ({ title, content }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300">{content}</p>
    </div>
  );
};

export default AboutPage;
