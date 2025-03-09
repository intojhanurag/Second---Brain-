import {useEffect } from "react";
import { useState } from "react"; 
import {BACKEND_URL} from "../config"

import axios from "axios"
export function useContent(){
    const [contents,setContents]=useState([]);

    function refresh()  
    {
        const tokendemo=localStorage.getItem("token")
        console.log(tokendemo);
        axios.get("https://brainly-backend-mu.vercel.app/api/v1/content",{
            
            headers:{
                "Authorization": localStorage.getItem("token")
                
            }
        })
            .then((response)=>{
                setContents(response.data.content)
            })
            .catch((error) => {
                console.error('Error fetching content:', error);
              });
    }

    useEffect(()=>{

        refresh();

        const interval=setInterval(()=>{
            refresh()

        },10*1000)

        return ()=>{
            clearInterval(interval);
        }
    
    },[])
    return {contents,refresh}
}