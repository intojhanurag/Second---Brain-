import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa"; // Import an icon for the button

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  async function signup() {
    console.log(usernameRef.current);
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    await axios.post("https://brainly-backend-lfwn22nyr-anurag-ojhas-projects.vercel.app", {
      username,
      password,
    });
    navigate("/signin");
    alert("You have signed up!");
  }

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
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
        <Input
          ref={passwordRef}
          placeholder="Password"
          type="password"
          className="mb-6 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-center">
          <Button
            onClick={signup}
            loading={false}
            variant="primary"
            text="Sign Up"
            fullWidth={true}
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            startIcon={<FaUserPlus />} // Use an icon for the button
          />
        </div>
        <div className="text-center mt-4">
          <span className="text-white">Do you not have an account? </span>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}