import { useContext } from "react";
import {userAuth} from "../App"

const Com_t=()=>{
    const {setUsername}=useContext(userAuth)
    return <div>
        <input type="text" placeholder="enter user name " onChange={(e)=>setUsername(e.target.value)}/>
    </div>
}
export default Com_t;