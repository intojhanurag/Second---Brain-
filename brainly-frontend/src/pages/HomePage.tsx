import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./HomePage.css";
import { Logo } from "../components/ui/Logo";
import { Card2 } from "../components/ui/Card2";
import {FaSun,FaMoon, FaBrain, FaEnvelope, FaSearch, FaSync, FaImages, FaPlay } from 'react-icons/fa'; // Import icons from react-icons

import brainImage from "../assets/brainim.jpg"; // Assuming you have a brain logo image

export function HomePage() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`homepage ${darkMode ? "dark" : "light"}`}>
      {/* <header className="header">
        <button className="mode-switch" onClick={toggleDarkMode}>
          {darkMode ? <FaSun/> : <FaMoon/>}
        </button>
      </header> */}
      <div className="content">
        {/* <div className="logo-container">
            <FaBrain className="brain-logo"/>
            <h1 classN
            ame="thinkflow-heading w-50 pl-2 pr-2 h-16 border-2 rounded-2xl border-solid border-blue-600">ThinkFlow</h1>
        </div> */}
        <div className="phone-frame">
          <div className="phone-notch"></div>
          <div className="phone-camera"></div>
          <div className="phone-screen">
            <div className="features">
              <Card2 title="ThinkFlow" description="Hello this is your 2nd Brain" icon={<FaBrain />} />
              <Card2 title="Organized message" description="Keep your messages organized and easily accessible." icon={<FaEnvelope />} />
              <Card2 title="Quick Search" description="Find what you need quickly with powerful search features." icon={<FaSearch />} />
              <Card2 title="Cross-Platform Integration" description="Seamlessly integrate across multiple platforms." icon={<FaSync />} />
              <Card2 title="Bring Your Gallery" description="Easily bring your gallery into the platform." icon={<FaImages />} />
              <Card2 title="Play and View in Site" description="Play and view media directly within the site." icon={<FaPlay />} />
              {/* Add more features as needed */}
            </div>
          </div>
        </div>
        <Link 
            to="/signin" 
            className="cta-button px-8 py-3 bg-blue-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105 ">
            Let's Go 
        </Link>

      </div>
    </div>
  );
}