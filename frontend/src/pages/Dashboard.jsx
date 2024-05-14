import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { useState ,useEffect } from "react";
import { Users } from "../components/Users";





export function Dashboard() {
const [balance , setBalance] = useState("") 
const [firstName,setFirstName]=useState("") 

useEffect(() => {
    async function fetchBalance() {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setBalance(response.data.balance);
            
        } catch (error) {
            console.log("Error fetching balance:", error);
            
        }
    }
    
    fetchBalance();
}, []);

useEffect(()=>{
    async function getUserName(){

        const response = await axios.get("http://localhost:3000/api/v1/user/username",{
            headers : {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        setFirstName(response.data.firstName)
    }
    getUserName();
},[])



    return <div>
        <Appbar name={firstName} />
        <Balance value={balance} />
       <Users />
    </div>
}