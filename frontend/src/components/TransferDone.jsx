import { useNavigate } from "react-router-dom";
import { Button } from "./Button";



export function TransferDone(){
const navigate = useNavigate();

    return <div class="flex justify-center h-screen bg-gray-100">
    <div className="h-full flex flex-col justify-center">
        <div
            class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
        >
            <div class="flex flex-col space-y-1.5 p-6">
                <h2 class="text-3xl font-bold text-center text-green-500">Transfered Successfully</h2>

            </div>
            <div className="flex flex-col justify-center h-ful">
        <Button onClick={(e) => {
            navigate("/dashboard");
        }} label={"Go To Dashboard"} />
    </div>
            </div>
            </div>
            </div>
}