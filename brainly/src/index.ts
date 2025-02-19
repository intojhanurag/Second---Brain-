import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import express from "express";

import { ContentModel, LinkModel, UserModel } from "./db";

import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";
import { random } from "./utils";
import { AuthRequest } from "./middleware";
import bcrypt from "bcrypt";
import cors from "cors"


const app=express();

app.use(express.json());
app.use(cors())

app.post("/api/v1/signup",async(req,res)=>{

    //zod validation, hash the password
    const username=req.body.username;
    const password=req.body.password;

    try{
        const hashedPassword=await bcrypt.hash(password, 10);
        await UserModel.create({
            username:username,
            password:hashedPassword
        })
    
        res.json({
            message:"User signed up"
        })
    } catch(e){
        res.status(411).json({
            message:"User already exists"
        })
    }

})

app.post("/api/v1/signin",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const existingUser=await UserModel.findOne({
        username
    })
    if(existingUser && typeof existingUser.password === 'string'){
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if(isPasswordValid){
            const token=jwt.sign({ id: existingUser._id }, JWT_PASSWORD);
            res.json({token})
        }else{
            res.status(403).json({ message: "Incorrect Credentials" });
        }
    }else {
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }


})

app.post("/api/v1/content",userMiddleware,async(req,res)=>{

    const link=req.body.link;
    const type=req.body.type;
    const userId = new mongoose.Types.ObjectId(req.userId);


    console.log("Before saving, userId:", typeof userId, userId);



    await ContentModel.create({
        link,
        type,
        
        title:req.body.title,
        //@ts-ignore,
        userId,

        tags:[]

    })

    res.json({
        message:"content added"
    })

    

})



app.get("/api/v1/content",userMiddleware,async(req,res)=>{
    //@ts-ignore
    const userId=req.userId;
    const content=await ContentModel.find({
        userId:userId

    }).populate("userId","username")
    res.json({
        content
    })

})



app.delete("/api/v1/content/:id",userMiddleware,async(req,res)=>{

    const contentId=req.params.id
    const userId=req.userId;
    console.log(userId);
    const deletedContent=await ContentModel.findOneAndDelete({
        _id:contentId,
        //@ts-ignore
        userId:userId
    })
    if(!deletedContent){
        return res.status(404).json({message:"Content not found or unauthorized"})
    }
    res.json({
        message:"content deleted"
    })

})

app.post("/api/v1/brain/share",userMiddleware,async(req,res)=>{

    const share=req.body.share;
    
    if(share)
    {
        const existingLink=await LinkModel.findOne({
            //@ts-ignore
           userId:req.userId 
        })

        if(existingLink)
        {
            res.json({
                hash:existingLink.hash
            })
            return
        }
        const hash=random(10);
        await LinkModel.create({
        //@ts-ignore
            userId:req.userId,
            hash:hash
        })
        res.json({
            message:"/share/"+hash
        })
        
    }else {
        await LinkModel.deleteOne({
            //@ts-ignore
            userId:req.userId
        })
    }

    res.json({
        message:"Removed link"
    })

})

app.get("/api/v1/brain/:shareLink",async(req,res)=>{

    const hash=req.params.shareLink;
    const link=await LinkModel.findOne({
        hash
    })

    if(!link){
        res.status(411).json({
            message:"sorry incorrect input"
        })
        return;
    }
    //userid
    const content=await ContentModel.find({
        userId:link.userId
    })
    console.log(link);
    const user=await UserModel.findOne({
        _id:link.userId
    })
    res.json({
        username:user?.username,
        content:content
    })

})

app.listen(3000)





