import React from "react";
import { BrowserRouter as Router,NavLink,Route } from "react-router-dom";
import { Options } from "../data/SideNavItems";

import AddProducts from "./AddProducts";
import DeleteProducts from "./DeleteProducts";
export default function SideNav() {
  function  handlerClick(e){
    
    }
  return (<div class='sidenav'>
      {Options.map((item) => {
          return (
            <NavLink
          to={item.url}
          className={item.class}
          name={item.name}
          onClick={handlerClick}
        >
          {item.name}
        </NavLink>

          );
        })}

 
       </div>

     
     )
    


 
}
