import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { useState ,useEffect } from "react";
import { Users } from "../components/Users";





export function Dashboard() {
const [balance , setBalance] = useState("")  

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
    return <div>
        <Appbar />
        <Balance value={balance} />
       <Users />
    </div>
}