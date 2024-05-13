import { useState } from "react";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export function Signup(){
const [firstName , setfirstName]=useState("")
const [lastName , setlastName]=useState("")
const [username , setUsername]=useState("")
const [password , setPassword]=useState("")

const navigate = useNavigate();


    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">

       <Heading label={"Sign Up"} />
       <SubHeading subheading={"Enter Your Information to Create an Account"} />
       <InputBox label={"First Name"}  placeholder={"John"} onChange={e=>{
        setfirstName(e.target.value)
       
       }}/>
       
       <InputBox label={"Last Name"}  placeholder={"Dumb"} onChange={(e)=>{
        setlastName(e.target.value)
       }}/>
       <InputBox label={"Email"}  placeholder={"dumbjohn@example.com"} onChange={e=>{
        setUsername(e.target.value)
       }}/>
       <InputBox label={"Password"}  placeholder={"Secret@123"} onChange={(e)=>{
        setPassword(e.target.value)
       }}/>
         <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} 
          />
        </div>
      <BottomWarning  warning={"Already have an Account "} buttonText={"Sign in"} to={"/signin"}/>
      </div>
     
    </div>
    </div>
}