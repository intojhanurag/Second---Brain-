"use client";

import { Button } from "./movingborder";
import { useNavigate } from "react-router-dom";



export function MovingBorderDemo() {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/signin");
    };
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white text-2xl dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        onClick={handleClick}
      >
        Let's Go
      </Button>
    </div>
  );
}
