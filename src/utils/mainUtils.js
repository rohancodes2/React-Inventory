import axios from "axios";
import React from 'react';
import { useHistory } from "react-router-dom";
// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
  
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }

  

  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    localStorage.removeItem('data')
  //  window.location.reload();
  }
  
  // set the token and user from the session storage
  export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  }
  export const validateUser=(username,values)=>{
     
    axios.get(`http://localhost:3002/users?username=${username}`).then(response => {
        console.log(response.data.length)
        if(response.data.length===0)
        {
            axios.post('http://localhost:3002/users',values).then(response => {
             setUserSession('temp',username)
             console.log('validate post result',response.data)
                alert("Registration successful.Please login again")
               // history.push('/about')
               
               return true;
             //   props.history.push('/dashboard');
              }).catch(error => {
                console.log(error);
              })
            
        }else{
            alert("Username already exists")
        }
    
    
      }).catch(error => {
        console.log(error);
        alert("some error occurred")
        
      });
  }