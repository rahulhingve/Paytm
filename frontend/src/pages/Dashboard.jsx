import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { useState } from "react";
import { Users } from "../components/Users";


// let manBal;
// async function balance (){
//     const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
//         userId
//     })

//     manBal= response.data.balance;
// }
export function Dashboard() {
   
    return <div>
        <Appbar />
        <Balance value={"10,000"} />
       <Users />
    </div>
}