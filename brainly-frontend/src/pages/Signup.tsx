import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus,FaEye,FaEyeSlash } from "react-icons/fa"; // Import an icon for the button
import { BiLoaderAlt } from "react-icons/bi";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import dialog components

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [showPassword,setShowPassword]=useState(false);
  const [loading,setLoading]=useState(false);
  

  const navigate = useNavigate();

  async function signup() {
    
    setLoading(true);
    try{
        const username = usernameRef.current?.value || "";
        const password = passwordRef.current?.value || "";

        await axios.post("https://brainly-backend-mu.vercel.app/api/v1/signup", {
          username,
          password,
        });
        toast.success("🎉 You signed up! Please login now.", {
          position: "top-center",
          autoClose: 3000,
        });
        setTimeout(()=>{
          navigate("/signin");
        },3000);//3 second delay
        
        
    } catch(error){
      console.error("Signup Error: ",error);
      toast.error("❌ Signup failed! Try again.", {
        position: "top-center",
        autoClose: 3000,
      });

    } finally{

      setLoading(false);

    }
  }

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center p-12">
      <div className="bg-black border-2 border-white rounded-lg shadow-lg p-8 w-full max-w-md">
        
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
        <div className="text-white pb-2">
            Username
        </div>
        <Input
          ref={usernameRef}
          placeholder="Username"
          className="mb-4 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <button
              onClick={signup}
              disabled={loading} // Disable button when loading
              className={`w-full py-3 font-bold rounded-lg transition duration-300 flex items-center justify-center ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {loading ? (
                <BiLoaderAlt className="animate-spin text-white text-2xl" />
              ) : (
                <>
                  <FaUserPlus className="mr-2" />
                  Sign Up
                </>
              )}
          </button>
        </div>
        <div className="text-center mt-4">
          <span className="text-white">Do you not have an account? </span>
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </div>
      </div>

      <ToastContainer 
        position="top-center"
        theme="dark"
        style={{width:"400px",fontSize:"25px",padding:"45px"}}
      />

    </div>
  );
}