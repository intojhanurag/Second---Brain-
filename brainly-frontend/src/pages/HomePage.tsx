import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { GlowingEffectDemoSecond } from "../components/ui/demo";
import { HoverBorderGradientDemo } from "../components/ui/Hoverborderdemo";

import { MovingBorderDemo } from "../components/ui/movingBorderDemo";


export function BackgroundLinesDemo() {
  return (
    <div className=" overflow-hidden items-center bg-white dark:bg-black flex flex-col justify-between">
      <BackgroundLines className=" w-full flex flex-col items-center px-4">
        <HoverBorderGradientDemo />

        
          <div className="mt-12 flex flex-col items-center">
            <h2 className="bg-clip-text pt-10 text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl sm:text-4xl  md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight ">
              Collect Organise, <br /> Visual Share.
            </h2>
            <p className="max-w-xl mx-auto text-xl  sm-text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-2 md:mt-4 lg:mt-6">
              Your digital mind, reimagined. Save, organize, and share your most valuable ideas, inspirations, and memories—all in one place.
            </p>
          </div>
       
      </BackgroundLines>
      <br />
      <MovingBorderDemo/>
      
      <div className="h-full pl-6 pr-6   lg:pb-32 pt-12" >
        <GlowingEffectDemoSecond />
      </div>
    </div>
  );
}