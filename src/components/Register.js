
import React, { useState } from "react";
import { Link, Redirect, Route, useHistory } from "react-router-dom";
import  './Register.css';
  import { useFormik, yupToFormErrors } from 'formik';
  import * as Yup from 'yup';
  import {connect} from 'react-redux'
  import axios from 'axios';
import { setUserSession, validateUser } from "../utils/mainUtils";

  const Register = (props) => {
      const history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const validationSchema = Yup.object(
     {
       fname: Yup.string().required(
            '*First name is required'
        ),
        lname: Yup.string().required(
          '*Last name is required'
      ),
         username: Yup.string().email().required(
             '*Username is required'
         ),
        password: Yup.string().required(
          '*Password is required'
         ),
         password1: Yup.string().required(
            '* Re-enter Password'
           ),
           location: Yup.string().required(
            '* Location required'
           ),
     })
    
    const formik = useFormik({
      initialValues:{
          fname:'',
          lname:'',
        username:'',
        password:'',
        password1:'',
        location:''
  
      },
      onSubmit: values => {
        console.log(values)
    if  (values.password!=values.password1)
{   
    alert('passwords dont match')
   
}else{
        validateUser(values.username,values)
       
      // let x=JSON.stringify(values, null, 2);
     //  ProductActions.addProduct(x)
      }},
      validationSchema
  
    });
   
    return (
      <div  className='main4'>
          
     <form className='form-group4'onSubmit={formik.handleSubmit}>
     <h4 style={{alignSelf:'center'}} >  Register </h4><br></br>
     <label htmlFor="fname">Enter First Name </label>
       <input
        className='form-control pro'
          id="fname"
          name="fname"
          type="text"
        
          
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fname}
        /> 
      {formik.errors.fname&&formik.touched.fname?<div><h7 style={{color: "red"}}>{formik.errors.fname}</h7></div>:null}<br></br>
      <label htmlFor="lname">Enter Last Name </label>
       <input
        className='form-control pro'
          id="lname"
          name="lname"
          type="text"
        
          
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lname}
        /> 
      {formik.errors.lname&&formik.touched.lname?<div><h7 style={{color: "red"}}>{formik.errors.lname}</h7></div>:null}<br></br>
      <label htmlFor="username">Enter Email ID</label>
        <input
         className='form-control pro textcolorx'
          id="username"
          name="username"
          type="text"
         
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        /> 
      {formik.errors.username&&formik.touched.username?<div><h7 style={{color: "red"}}>{formik.errors.username}</h7></div>:null}<br></br>
       
      
      <label htmlFor="password">Enter Password</label>
        <input
       className='form-control pro textcolorx'
          id="password"
          name="password"
          type="password" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        /> 
      {formik.errors.password&&formik.touched.password?<div><h7 style={{color: "red"}}>{formik.errors.password}</h7></div>:null}<br></br>
      <label htmlFor="password1">Re-enter Password</label>
        <input
        className='form-control pro textcolorx'
          id="password1"
          name="password1"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password1}
        /> 
      {formik.errors.password1&&formik.touched.password1?<div><h7 style={{color: "red"}}>{formik.errors.password1}</h7></div>:null}<br></br>
      <label htmlFor="location">Location</label>
        <input
        className='form-control pro textcolorx'
          id="location"
          name="location"
          type="text"
       
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.location}
        /> 
      {formik.errors.location&&formik.touched.location?<div><h7 style={{color: "red"}}>{formik.errors.location}</h7></div>:null}<br></br>
       <button type="submit" className='btn btn-lg cbacx text-white'>Register</button>
        <a href='/signIn'>Back to Login</a>
      </form>
    
      </div>
    );
  
    
  };
  const mapDispatchToProps = dispatch =>{
      return {
     
      }
    }

    export default connect(null,mapDispatchToProps)(Register)
  


