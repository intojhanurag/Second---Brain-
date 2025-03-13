import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt ,FaEye,FaEyeSlash} from "react-icons/fa";
import { BackgroundLines } from "../components/ui/background-lines";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword,setShowPassword]=useState(false);

  const navigate = useNavigate();

  async function signin() {
    console.log(usernameRef.current);
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    const response = await axios.post("https://brainly-backend-mu.vercel.app/api/v1/signin", {
      username,
      password,
    });
    console.log("Signin Response:", response.data);
    const jwt = response.data.token;
    if (jwt) {
      localStorage.setItem("token", jwt);
      navigate("/dashboard");
      console.log("Token stored:", jwt);
    } else {
      console.error("No token received from backend");
    }
  }

  return (
    
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      

      <div className="bg-black border-2 border-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In</h2>
        <div className="pb-2 text-white">
            Username
        </div>
        <Input
          ref={usernameRef}
        
          placeholder="Username"
          className="mb-4 p-3 w-full border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="text-white pb-2">
            Password
        </div>
        <div className="relative mb-6">
          <Input
            ref={passwordRef}
            placeholder="Password"
            type={showPassword?"text":"password"}
            className="mb-6 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div 
            className="absolute inset-y-6 right-0 text-2xl  mb-40  mr-2 pr-0 flex items-center cursor-pointer"
            onClick={()=>setShowPassword(!showPassword)}>
            {showPassword?<FaEyeSlash className="text-gray-500"/>:<FaEye className="text-gray-500"/>}
          </div>
        </div>
        <div className="flex justify-center">

          <Button
            onClick={signin}
            loading={false}
            variant="primary"
            text="Sign in"
            fullWidth={true}
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            startIcon={<FaSignInAlt/>}
          />
        </div>

        <div className="text-center mt-4">
          <span className="text-white">Do you not have an account? </span>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}