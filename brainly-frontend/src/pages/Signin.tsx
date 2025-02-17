import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  async function signin() {
    console.log(usernameRef.current);
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
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
        <Input
          ref={passwordRef}
          placeholder="Password"
          type="password"
          className="mb-6 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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