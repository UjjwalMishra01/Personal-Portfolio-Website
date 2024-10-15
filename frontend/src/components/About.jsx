import { useState } from "react";
import bannerImage from "../assets/res1.jpg";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & ML Engineer",
    desc1: ` Driven and technically skilled Computer Science student specializing in AI and Machine Learning.
    Experienced in software development and deploying ML models.`,
    desc2: ` Patent holder in automation technology, demonstrating innovation and teamwork in delivering optimized, 
    impactful solutions.
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-white-100 py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
        {/* image container */}
  <div className="rounded w-full flex justify-center">
   <img
     className="w-fit rounded-full border-2 border-black"
     src={data.image}
     alt="ujjwal mishra"
     />
      </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;