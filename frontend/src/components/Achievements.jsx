import React from "react";
import "./Achievements.css"; // Ensure to import the CSS file

const Achievements = () => {
  return (
    <div className="main_container">
      <h1 className="text-5xl font-bold text-center underline text-black">Glimpses...</h1>
      <div className="photo_container">
        <div className="photo_item">
          <img src=".\src\assets\6.jpg" />
          <p>
            <span className="font-bold">4th Prize, Ideathon2k24</span>
            <br />
            Chandigarh University, 2024
          </p>
        </div>

        <div className="photo_item">
          <img src=".\src\assets\1.jpg" />
          <p>
            <span className="font-bold">3rd Prize, CU ProjectExpo-2k24</span>
            <br />
            Chandigarh University, 2024
          </p>
        </div>

        <div className="photo_item">
          <img src=".\src\assets\5.jpg" />
          <p>
            <span className="font-bold">3rd Prize, CU ProjectExpo-2k24</span>
            <br />
            Chandigarh University, 2024
          </p>
        </div>

        <div className="photo_item">
          <img src=".\src\assets\4.jpg" />
          <p>
            <span className="font-bold">Felicitation by AIML Department for securing 5th position at Hackfest</span>
            <br />
            IIT(ISM) Dhanbad, 2023
          </p>
        </div>

        <div className="photo_item">
          <img src=".\src\assets\2.jpg" />
          <p>
            <span className="font-bold">5th Prize, Hackfest</span>
            <br />
            IIT(ISM) Dhanbad, 2023
          </p>
        </div>

        <div className="photo_item">
          <img src=".\src\assets\3.jpg" />
          <p>
            <span className="font-bold">Organized workshop on AIML</span>
            <br />
            Chandigarh University, 2022
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default Achievements;
