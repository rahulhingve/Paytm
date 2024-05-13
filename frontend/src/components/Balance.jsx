export function Balance ({value}){
    return <div className="flex"> 
        <div className="font-medium p-4 text-lg">
            Your Balance is
        </div>
        <div className="font-medium p-4 text-lg">
            Rs {value}
        </div>
    </div>
}