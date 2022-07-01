import React, { useEffect, useState } from "react";
import axios from 'axios'
import { connect } from 'react-redux';
import About from "./About";
import Signout from "./Signout";
import Products from "./Products";
import { Route, BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { MainItems,SubItems1,SubItems2,SignStatus } from "../data/NavbarItems";
import EditProfile from "./EditProfile";
import { initializeProduct } from "../Redux/Actions/ActionCreators";
import './Navbar.css';
import SignIn  from "./SignIn";
import { getToken, getUser, removeUserSession } from "../utils/mainUtils";
import Register from "./Register";
import uuid from "react-uuid";
import About2 from "./About2";
function Navbar(props) {
const [initialData,setData]=useState([]);
const [check,setcheck]=useState(false);
const [SubItems,setSubItems]=useState([]);
const [user,setUser]=useState('SignIn');
useEffect(()=>{
  console.log('hey useeffect nav')
  
  getToken()?setSubItems(SubItems1):setSubItems(SubItems2)
 if (getUser()!=null){setUser(getUser())};
  props.initializeProduct(initialData)
 
  axios.get('http://localhost:3000/products').then(function (response) {
       // handle success
   props.initializeProduct(response.data);
     
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
     .then(function () {
       // always executed
     })}
    ,[])
  
  const handlerClick=(e)=>{
    //check if signed in 
   // SignContainer='w3-dropdown-hover w3-hide-small'
    //check if not signed in
    
    const check= (e.target.name==='About')?console.log("ok"): props.change;
    //const check2 = (e.target.value==='Sign In')?alert("Sign in"):SignContainer='w3-dropdown-hover w3-hide-small';
  }
  return (
     <Router>
    <div>
      {console.log("redux first list ",props.products)}
    <div className="w3-bar nnn w3-card" >
    
      <nav style={{ margin: 10 }}>
      {MainItems.map((item) => {
          return (
            <NavLink
            key={uuid()}
          to={item.url}
          className={item.class}
          name={item.name}
          onClick={handlerClick}
          activeClassName={'active'}
        >
          {item.name}
        </NavLink>

          );
        })}

  
      </nav>
      <div className='w3-right w3-dropdown-hover '>
  <button onClick={props.change}className=" btn-lg btn-outline-light text-white "
           title="More"> {user}
          <i className="fa fa-caret-down"></i>
          </button>
          <div className="w3-dropdown-content w3-bar-block w3-card-4">
            {
              SubItems.map((item) => {
              return (
                <NavLink
                key={uuid()}
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
        </div>
      </div>
    {console.log(getToken())}
    <Route path="/home"  exact component={About2} />
      <Route path="/products"  render={()=> getToken()?<Products/>:<SignIn/>} />
      <Route path="/signIn"component={SignIn}/>
      <Route path="/editprofile"  component={EditProfile} />
      <Route path="/register"  component={Register} />
      <Route path="/signout" render={()=><Signout/>} />
    </div>
    </Router> 
  );
          }

          
       

const mapStateToProps = state =>{
  return {
    products: state.products
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    initializeProduct:prod=>dispatch(initializeProduct(prod))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Navbar)