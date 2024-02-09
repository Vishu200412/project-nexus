// HomePage.js
import React from 'react';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen flex flex-col items-center justify-center pt-16 md:pt-0">
        <div className="flex flex-col md:flex-row items-center h-screen">
          <div className="text-white p-4 md:p-8 text-center md:text-left md:w-1/2 md:mr-4 mb-4 md:mb-0 ">
            <h1 className="text-4xl font-extrabold mb-4 mt-8">Welcome to Nexus</h1>
            <p className="text-lg mb-4 italic">"Transforming Ideas into Reality."</p>
            <p className="text-lg leading-relaxed">
              Welcome to Nexus, where innovation meets excellence. We are a leading software development company dedicated to delivering cutting-edge solutions tailored to meet your business requirements. Explore our services and let's embark on a journey of digital transformation together.
            </p>
          </div>

          {/* Image Content */}
          <div className="overflow-hidden md:w-1/2 md:h-3/4 flex justify-center md:ml-4 mb-4 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Description"
              className="h-48 md:h-full w-full object-cover rounded-md m-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
