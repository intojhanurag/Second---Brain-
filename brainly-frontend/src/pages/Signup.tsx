import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import { useRef } from "react";
import {BACKEND_URL} from "../config"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signup(){
    const usernameRef=useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);

    const navigate=useNavigate();


    async function signup(){
        console.log(usernameRef.current)
        const username=usernameRef.current?.value||"";
        
        const password=passwordRef.current?.value||"";

        await axios.post(BACKEND_URL+"/api/v1/signup",{
            username,
            password
        })
        navigate("/signin")
        alert("You have signed up!")
    } 
    return <div className="h-screen w-screen bg-gray-200
    flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-8 rounded-xl">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>

            <div className="flex justify-center pt-4">
                <Button onClick={signup} loading={false} variant="primary" text="Sign Up" fullWidth={true}></Button>
            </div>
        </div>

    </div>
}