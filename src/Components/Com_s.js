import  Com_t from './Com_t'
import {useContext} from "react"
import { userAuth } from '../App'

const Com_s=()=>{
    const {username}=useContext(userAuth)
    return(<div>
         <p>Com_s {username}</p>
        <Com_t/></div>)
}
export default Com_s;