// ServicesSection.jsx

import React from 'react';

const servicesData = [
  {
    title: 'Software Development',
    description: 'We specialize in creating robust and scalable software solutions tailored to your business needs. Our team of experienced developers ensures the delivery of high-quality and efficient software applications.',
    image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D', // Replace with your image URL
  },
  {
    title: 'Artificial Intelligence',
    description: 'Explore the potential of AI with our innovative solutions to enhance your business processes. Our AI services include machine learning, natural language processing, and computer vision, providing intelligent solutions for your organization.',
    image: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D', // Replace with your image URL
  },
  {
    title: 'Cyber Security',
    description: 'Protect your digital assets with our advanced cyber security measures and strategies. Our cybersecurity services include threat detection, vulnerability assessments, and secure software development practices, ensuring a robust defense against cyber threats.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D', // Replace with your image URL
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-800 text-white py-16 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>

        <div className="flex flex-wrap justify-center">
          {servicesData.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-gray-700 p-8 rounded-md shadow-md text-center transition duration-300 hover:bg-gray-600">
                <img
                  src={service.image}
                  alt={`${service.title} Image`}
                  className="h-32 w-32 mx-auto mb-4 object-cover rounded-full"
                />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
