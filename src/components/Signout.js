import React, { useEffect, useState } from "react";
import { removeUserSession } from "../utils/mainUtils";
export default function Signout() {
        const [flag,setFlag]=useState(true)
        useEffect(()=>{

  removeUserSession()
          
        },[])

        
  return <div>Sign out Successful</div>;
}
