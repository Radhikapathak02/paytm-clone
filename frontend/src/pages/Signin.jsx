import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username: email,
        password
      });

      
      localStorage.setItem("token", response.data.token);
    
      navigate("/dashboard");
    } catch (error) {
      alert("Signin failed: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          
          <InputBox
            placeholder="john@gmail.com"
            label={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <InputBox
            placeholder="123456"
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <div className="pt-4">
            <Button label={"Sign in"} onClick={handleSignin} />
          </div>

          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
};
