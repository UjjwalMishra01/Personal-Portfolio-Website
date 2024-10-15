import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14 bg-black">
        <h1 className="text-5xl font-bold text-center underline text-white">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            <i class=" text-5xl fa-brands fa-aws"></i>
            <h1 className="text-4xl">Web Development</h1>
            <p>
            I offer full-stack web development services using technologies like SpringBoot, React, and JavaScript. From building responsive user interfaces to integrating complex back-end systems, I ensure high performance, security, and scalability for your web applications.            </p>
            
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-robot"></i>
            <h1 className="text-4xl">ML Engineer</h1>
            <p>
            As a Machine Learning Engineer, I provide services in developing AI-driven models tailored to your business needs. Specializing in deep learning, natural language processing, and computer vision, I build intelligent systems that enhance decision-making, automation, and predictive analytics.             </p>
            
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-java"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
            I deliver efficient and reliable back-end development using Java and Python. Whether it's API creation, database management, or cloud-based services, I ensure seamless integration, scalability, and maintainability for your applications, tailored to meet your specific requirements.
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;