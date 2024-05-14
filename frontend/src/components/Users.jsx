
import { useEffect, useState } from "react";
import { InputBox } from "../components/InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";



export function Users() {
    const [users,setUsers]=useState([])
    const [search, setSearch] = useState("")


    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+search,{
            
                headers: {
                    Authorization : "Bearer " + localStorage.getItem("token")
                }
            
        })
        .then(respose=>{
            setUsers(respose.data.user)
        })
    },[search])
    return <div >
        <div className="font-bold p-4 text-lg">
            Users
        </div>
        <div className="p-1 ml-5 mr-5">
            <InputBox placeholder={"Search"} onChange={(e) => {
                setSearch(e.target.value)
            }} />
        </div>
        <div >
            {users.map(user=> <User user={user}/>)}
        </div>
    </div>
}

function User({user}){

    function capitalize(s){
        return  s[0].toUpperCase() + s.slice(1);
    }

    const navigate = useNavigate();
    return<div className="flex justify-between pr-7 pl-7 p-3 bg-red-50 border rounded-full ">
    <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
                {user.firstName[0].toUpperCase()}
            </div>
        </div>
        <div className="flex flex-col justify-center h-full">
            <div>
                {capitalize(user.firstName)} {capitalize(user.lastName)}
            </div>
        </div>
    </div>

    <div className="flex flex-col justify-center h-ful">
        <Button onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName +"&lastName="+user.lastName);
        }} label={"Send Money"} />
    </div>
</div>
}