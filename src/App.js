import { useState,createContext} from "react";
import Com_f from "./Components/Com_f";
import Com_s from "./Components/Com_s";
import Com_t from "./Components/Com_t";

//create context
export const userAuth =createContext({})

function App(){
   const [username,setUsername]=useState('')

   return(
  
     
      <userAuth.Provider value={{
         username,
         setUsername
      }}>
         <h1>App {username}</h1>
         <Com_f />
        
      </userAuth.Provider>
   )
}
export default App;