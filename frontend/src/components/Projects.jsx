import React from "react";

const Projects = () => {
  return (
    <>
      <div className="maincontainer py-14 bg-black">
        <h1 className="text-5xl font-bold text-white text-center underline">Projects</h1>

        {/* Projects container with horizontal scrolling */}
        <div className="services-container space-x-5 px-10 flex mt-12 overflow-x-auto">
          <div className="project-card cursor-pointer hover:bg-orange-600 bg-slate-100 p-5 text-center shadow-lg rounded-xl w-1/3 min-w-[300px] space-y-4">
            <h1
              onClick={() => window.open('https://github.com/UjjwalMishra01/Mo-view', '_blank')}
              className="text-4xl text-center font-bold hover:underline"
            >
              Mo-view
            </h1>
            <p>A full-stack web-application where users can review movies. 
            <br/> <span className="font-bold">Tech Stack:</span> SpringBoot | ReactJS | MongoDB | API's | MVC | MongoDB | Postman
            </p>
          </div>

          <div className="project-card cursor-pointer hover:bg-orange-600 bg-slate-100 p-5 text-center shadow-lg rounded-xl w-1/3 min-w-[300px] space-y-4">
            <h1
              onClick={() => window.open('https://github.com/UjjwalMishra01/Samarpan', '_blank')}
              className="text-4xl text-center font-bold hover:underline"
            >
              Samarpan
            </h1>
            <h2 className="font-bold">(Ongoing)</h2>
            <p>An NGO website where NGOs can post their needs, and users can donate to help them. Built using React and SpringBoot.
            <br/> <span className="font-bold">Tech Stack:</span>SpringBoot | MVC | RestAPI | ReactJS | Postman | MongoDB | MySQL
            </p>
          </div>

          <div className="project-card cursor-pointer hover:bg-orange-600 bg-slate-100 p-5 text-center shadow-lg rounded-xl w-1/3 min-w-[300px] space-y-4">
            <h1
              onClick={() => window.open('https://github.com/UjjwalMishra01/Finnery', '_blank')}
              className="text-4xl text-center font-bold hover:underline">
              Finnery
            </h1>
            <p>A financial chatbot curated for users to get finance-related news at their fingertips.
            <br/> <span className="font-bold">Tech Stack:</span> Python | Machine Learning | NLP
            </p>
          </div>

          <div className="project-card cursor-pointer hover:bg-orange-600 bg-slate-100 p-5 text-center shadow-lg rounded-xl w-1/3 min-w-[300px] space-y-4">
            <h1
              onClick={() => window.open('https://github.com/UjjwalMishra01/Computer-Vision/tree/main/Volume_Controller', '_blank')}
              className="text-4xl text-center font-bold hover:underline"
            >
              Smart Volume Controller
            </h1>
            <p>A computer vision-based volume controller for hands-free smart control of laptops and TVs.
                <br/> <span className="font-bold">Tech Stack:</span> Python | Computer Vision | Numpy | Object Tracking
            </p>
          </div>
        </div>

        {/* Centered Explore More button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => window.open('https://github.com/UjjwalMishra01?tab=repositories', '_blank')}
            className="px-8 py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-orange-500"
          >
            Explore More Projects
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
