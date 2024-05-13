import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signin(){
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
const navigate = useNavigate();

    return <div className="flex bg-slate-300 h-screen justify-center">
        <div className="flex flex-col  justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
       
      <Heading label={"Sign In"}/>
      <SubHeading subheading={"Enter your credentials to access your account"} />
      <InputBox label={"Email"} onChange={(e)=>{
        setUsername(e.target.value);
      }} />
      <InputBox label={"Password"} onChange={(e)=>{
        setPassword(e.target.value);
      }}/>
      <div className="pt-4">
      <Button label={"Sign In"} onClick={async()=>{
        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username,
            password
        })
        
        localStorage.setItem("token", response.data.token )
        navigate("/dashboard")

      }}/>
      </div>
      <BottomWarning warning={"Don't have an account? "} buttonText={"Sign up"} to={"/signup"}/>
        </div>
      </div>
      
    </div>
}