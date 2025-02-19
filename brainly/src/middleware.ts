import { NextFunction,Request,Response } from "express"

import { JWT_PASSWORD } from "./config";
import jwt from "jsonwebtoken"

export interface AuthRequest extends Request{
    userId?:string
}

export const userMiddleware=(req:AuthRequest,res:Response,next:NextFunction)=>{

    const autHeader=req.headers["authorization"];
    if(!autHeader || !autHeader.startsWith("Bearer ")){
        return res.status(401).json({message:"Unauthorized : No token provided"})
    }
    
    try{
        const token=autHeader.split(" ")[1]
        const decoded=jwt.verify(token,JWT_PASSWORD) as {id:string};
        req.userId = Array.isArray(decoded.id) ? decoded.id[0] : decoded.id;

        console.log("User authenticated with id :",req.userId)
        next();
        
    } catch(error){
        console.error("Jwt verification failed",error);
        return res.status(403).json({message:"Invalid token"})
    }
}