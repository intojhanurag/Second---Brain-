import React from "react";
import "./Header.css"
import { FaBrain, FaSun, FaMoon } from 'react-icons/fa'; // Import icons from react-icons

export function Header(){
  return (
    <header className="header">
      <div className="logo-container">
        <FaBrain className="brain-logo" />
        <h1 className="thinkflow-heading">ThinkFlow</h1>
      </div>
    </header>
  );
};