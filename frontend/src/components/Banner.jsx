import { useEffect, useRef } from "react";
import banner from "../assets/banner.jpg"
import bannerBackground from "../assets/banner_wallpaper.svg"
import Typed from 'typed.js'




const Banner = () =>{

   const el = useRef(null)
   useEffect(()=>{
    const typed = new Typed(el.current, {
      strings: ["JAVA Developer", "ML Engineer", "Web Developer", "Content Creator"], // Strings to display
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
   },[])

    return (
     
    <div style={
        {
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize:'cover',
        }
    }className=" banner-main flex items-center">

    <div  className=" w-full  flex justify-center ">
   {/*This container is for text*/}
   <div className="w=2/3 space-y-2 ms-10">
   <h3 className="text-3xl font-semibold">Hii! I am</h3>
   <h1 className=" text-5xl font-bold">Ujjwal Mishra</h1>
   <h2 className="text-2xl">
    And I am a < span className="font-bold" ref={el}></span></h2>
   <p className="bold">
   Bhagalpur Bihar, India-812001 | ujjwalmishra523@gmail.com | +91-8603542148 
   </p>

   <div className="icons-container flex space-x-5">
            <a
            href="http://www.linkedin.com/in/ujjwalm01"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-12  rounded-full flex justify-center items-center bg-white-800">
              <i class="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
            <a 
             href="https://github.com/UjjwalMishra01"
             target="_blank"
             rel="noopener noreferrer"
             className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-12  rounded-full flex justify-center items-center bg-white-800">
              <i class="fa-brands text-4xl  fa-github"></i>
            </a>
            <a 
             href="https://twitter.com/Ujjwalm101?t=75Q5SA_J0237HPuWoUM9rg&s=09"
             target="_blank"
             rel="noopener noreferrer"
             className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-12  rounded-full flex justify-center items-center bg-white-800">
              <i class="fa-brands text-4xl  fa-x-twitter"></i>
            </a>

            <a 
            href="https://youtube.com/@mishra_ji108?si=oFnglGJ1t_4Pqozu"
            target="_blank"
            rel="noopener noreferrer"
            className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-12  rounded-full flex justify-center items-center bg-white-800">
              <i class="fa-brands text-4xl  fa-youtube"></i>
            </a>

            
          </div>
          <br />
          
   </div>
   </div>
   <div className=" w-full">
   {/*This container is for image*/}
   <img  className="rounded-full w-fit ms-20" src={banner}></img>
   </div>

    </div>

    )
};


export default Banner