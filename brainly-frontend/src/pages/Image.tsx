import React from "react";
import './index.css';
import './tailwind.css'; // Import the

interface ImageProps{
    src:string;
    alt?:string;
    className?:string;
}

export const Image: React.FC<ImageProps>=({src,alt="",className=""})=>{
    return <img src={src} alt={alt} className={className} />
}