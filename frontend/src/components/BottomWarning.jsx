
import {Link} from "react-router-dom"
export function BottomWarning({ warning, buttonText,to }) {
    return <div>

        <div>
        {warning}  <Link className="pointer underline cursor-pointer" to={to}>{buttonText}</Link>
        </div>
        
        
        
    </div>
}