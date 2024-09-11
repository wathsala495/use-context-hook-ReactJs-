import { useContext } from "react";
import Com_s from "./Com_s";
import { userAuth } from "../App";

const Com_f=()=>{
    const {username}=useContext(userAuth)
    return(<div>
        <p>Com_f {username}</p>
        <Com_s />
        </div>)
}
export default Com_f;