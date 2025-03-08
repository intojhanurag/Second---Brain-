

import { NextFunction,Request,Response } from "express"

import { JWT_PASSWORD } from "./config";
import jwt from "jsonwebtoken"

export interface AuthRequest extends Request{
    userId?:string
}

export const userMiddleware=(req:AuthRequest,res:Response,next:NextFunction)=>{

    console.log("Headers received:", req.headers);


    const authHeader=req.headers["authorization"];
    if(!authHeader){
        res.status(401).json({message:"Unauthorized : No token provided"})
        return
    }
    const token=authHeader.startsWith("Bearer ")?authHeader.split(" ")[1]:authHeader;
    
    try{
        
        const decoded=jwt.verify(token,JWT_PASSWORD) as {id:string};
        req.userId = Array.isArray(decoded.id) ? decoded.id[0] : decoded.id;

        console.log("User authenticated with id :",req.userId)
        next();
        
    } catch(error){
        console.error("Jwt verification failed",error);
        res.status(403).json({message:"Invalid token"})
    }
}