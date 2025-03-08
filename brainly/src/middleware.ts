// import { NextFunction,Request,Response } from "express"

// import { JWT_PASSWORD } from "./config";
// import jwt from "jsonwebtoken"

// export interface Request extends Request{
//     userId?:string
// }

// export const userMiddleware=(req:Request,res:Response,next:NextFunction)=>{

//     const autHeader=req.headers["authorization"];
//     if(!autHeader || !autHeader.startsWith("Bearer ")){
//         res.status(401).json({message:"Unauthorized : No token provided"})
//     }
    
//     try{
//         const token=autHeader.split(" ")[1]
//         const decoded=jwt.verify(token,JWT_PASSWORD) as {id:string};
//         req.userId = Array.isArray(decoded.id) ? decoded.id[0] : decoded.id;

//         console.log("User authenticated with id :",req.userId)
//         next();
        
//     } catch(error){
//         console.error("Jwt verification failed",error);
//         res.status(403).json({message:"Invalid token"})
//     }
// }


import { NextFunction,Request,Response } from "express"

import { JWT_PASSWORD } from "./config";
import jwt from "jsonwebtoken"

export interface authRequest extends Request{
    userId?:string
}

export const userMiddleware=(req:authRequest,res:Response,next:NextFunction)=>{

    const autHeader=req.headers["authorization"];
    if(!autHeader || !autHeader.startsWith("Bearer ")){
        res.status(401).json({message:"Unauthorized : No token provided"})
    }
    
    try{
        const token=autHeader!.split(" ")[1]
        const decoded=jwt.verify(token,JWT_PASSWORD) as {id:string};
        req.userId = Array.isArray(decoded.id) ? decoded.id[0] : decoded.id;

        console.log("User authenticated with id :",req.userId)
        next();
        
    } catch(error){
        console.error("Jwt verification failed",error);
        res.status(403).json({message:"Invalid token"})
    }
}