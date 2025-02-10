import { ReactElement } from "react";

type Varients="primary" | "secondary"
interface ButtonProps{
    variant:"primary"|"secondary";
    size:"sm"|"md"|"lg";
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    onClick:()=>void
}

const variantStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-600"
}
const sizeStyles={
    "sm":"py-1 px-2 text-xl rounded-xl",
    "md":"py-2 px-4 text-md rounded-md",
    "lg":"py-4 px-6 text-sm rounded-sm"
}

const defaultStyles="rounded-md p-4 flex"

export const Button=(props:ButtonProps)=>{

    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon?<div className="pr-2">{props.startIcon}</div>:null}{props.text} {props.endIcon}</button>
}

<Button variant="primary" size="md" onClick={()=>{}} text={"asd"}></Button>