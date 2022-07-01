
import React, { useState,useEffect  } from "react";
import { Route, useHistory} from "react-router-dom";
import  './Register.css';
  import { useFormik, yupToFormErrors } from 'formik';
  import * as Yup from 'yup';
  import {connect} from 'react-redux'
  import axios from 'axios';
import { setUserSession, validateUser } from "../utils/mainUtils";
import { updateUser } from "../Redux/Actions/ActionCreators";

  const EditProfile = (props) => {
      const history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data,setData]=useState(JSON.parse(localStorage.getItem('data')))
    useEffect(()=>{
      console.log(data);
    })
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
          fname:data.fname,
          lname:data.lname,
        username:data.username,
        location:data.location
  
      },
      onSubmit: values => {
        console.log(values)
    if  (values.password!=values.password1)
{   
    alert('passwords dont match')
   
}else{
      
      // let x=JSON.stringify(values, null, 2);
     //  ProductActions.addProduct(x)
      }},
      validationSchema
  
    });
   
    return (
      <div  className='main4'>
          
     <form className='form-group4'onSubmit={formik.handleSubmit}>
     <h4 style={{alignSelf:'center'}} >  Profile </h4><br></br>
     <label htmlFor="fname">First Name </label>
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
      <label htmlFor="lname">Last Name </label>
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
    <label htmlFor="username">Enter Email ID :{formik.values.username}</label>
        
       <br></br>
     
       
      
      
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
  const mapStateToProps = state =>{
    return {
      products: state.products,
      product:state.product
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
      updateUser:(values)=>dispatch(updateUser(values))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(EditProfile)


