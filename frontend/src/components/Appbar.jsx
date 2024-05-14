export function Appbar({name}) {

    function capitalize(s){
        return s ? s[0].toUpperCase() + s.slice(1) : '';
    }


    return <div>
        <div className=" flex justify-between shadow p-4">
            <div className="flex flex-col font-bold text-xl">
                PayTm App
            </div>
            <div className="flex items-center	">
                <div className="pr-2	 font-medium">
                    Hello,
                </div>
                <div className="pr-2 font-medium" >
                    {capitalize(name)}
                </div>
                <div className="bg-slate-200 rounded-full h-12 w-12 mt-1 mr-2 flex justify-center">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {capitalize([name ? name[0] : ''])}
                    </div>

                </div>
            </div>


        </div>

    </div>
}