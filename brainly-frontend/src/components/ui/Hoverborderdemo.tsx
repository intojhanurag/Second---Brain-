"use client";
import React from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { FaBrain, FaSun, FaMoon } from 'react-icons/fa'; // Import icons from react-icons

export function HoverBorderGradientDemo() {
  return (
    <div className="absolute pl-8 text-4xl left-0 top-4  flex justify-center text-center text-white">
      
        <FaBrain/>
        <span className="pl-2">ThinkFlow</span>
      
    </div>
  );
}


