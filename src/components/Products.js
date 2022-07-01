import React, { Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Prompt
} from "react-router-dom";
import {routes} from '../data/SideNavItems'
import {CSSTransition} from 'react-transition-group'
import './Products.css'
import './AddProducts.css'
export default function Products() {
 
   const [toggle,setToggle]=useState(false)
   const [touch,touched]=useState(false)
   const [slide,setSlide]=useState(false)
  function handler(){
    if(touch)
    {setToggle(!toggle)
      touched(false)}else{
      setToggle(false)
    
    }
    handler2()
  }
  function handler2(){
    setSlide(!slide)
    
  }
  function handleTouch(){
    touched(true);
      handler2()
  }
let me='me';
  return (

    <Router>
          <button onClick={handler2}>Slide</button>
      <div style={{ display: "flex" }}>
    
      <CSSTransition
       in={slide}
      timeout={3500}
       classNames='balloon'
       unmountOnExit
     >
        <div class='sidenav'
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <NavLink onClick={handler}to="/products/view">View Details</NavLink>
            </li>
            <li>
              <NavLink  onClick={handleTouch}   to="/products/add">Add Products</NavLink>
            </li>
            <li>
              <NavLink  onClick={handler}to="/products/delete">Delete Products</NavLink>
            </li>
            <li>
              <NavLink  onClick={handler}to="/products/update">Update Products</NavLink>
            </li>
            <li>
              <NavLink  onClick={handler} to="/products/chart">Charts & Stats</NavLink>
            </li>
          </ul>
        </div>
        </CSSTransition>
    
        <div class='main container' >
        <CSSTransition
       in={toggle}
      timeout={3500}
       classNames='balloon'
       unmountOnExit
     >
     <div className="hhhhh">Notification: You will lose unsaved data on moving to another page.</div>
     </CSSTransition>

        <Suspense fallback={<div>Loading123...</div>}> 
          <Switch>
            {routes.map((route, index) => (
             
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={()=>(<route.main/>)}
              />
            ))}
          </Switch>
         </Suspense>
        </div>
       
      </div>
    </Router>
  );
}
