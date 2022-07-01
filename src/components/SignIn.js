import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
  import { useFormik, yupToFormErrors } from 'formik';
  import * as Yup from 'yup';
  import {connect} from 'react-redux'
  import axios from 'axios';
  import './Register.css'
import { setUserSession } from "../utils/mainUtils";

  const SignIn = (props) => {
      const history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const validationSchema = Yup.object(
     {
         username: Yup.string().required(
             '*Username is required'
         ),
        password: Yup.string().required(
          '*Password is required'
         ),
     })
    
    const formik = useFormik({
      initialValues:{
        username:'',
        password:''
  
      },
      onSubmit: values => {
        console.log(values)
        setError(null);
        setLoading(true);
        axios.get(`http://localhost:3002/users?username=${values.username}&&password=${values.password}`).then(response => {
          setLoading(false);
          console.log(response.data)
          
          if(response.data[0]!=undefined){
            localStorage.setItem('data',JSON.stringify(response.data[0]))
          setUserSession(response.data[0].id, response.data[0].username)
          history.push('/products/view');
          window.location.reload();
          }else{
              alert("enter right credentials")
          }
         
         
       //   props.history.push('/dashboard');
        }).catch(error => {
          setLoading(false);
          console.log(error);
          if (error.response.status === 401) setError(error.response.data.message);
          else setError("Something went wrong. Please try again later.");
        });
      // let x=JSON.stringify(values, null, 2);
       //ProductActions.addProduct(x)
      },
      validationSchema
  
    });
   
    return (
      <div style={{width:1000}}>
          
     <form className='form-group main1'onSubmit={formik.handleSubmit}>
     <h4 style={{float:'center'}} >Login </h4>

      <label htmlFor="username">Username</label>
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
       
       <label htmlFor="password">Password</label>
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
         <button type="submit" className='btn cbacx text-white btn-lg'>Login</button>
         <br></br><a href='/register'>Create a new account</a>
      </form>
     
      </div>
    );
  
    
  };
  const mapDispatchToProps = dispatch =>{
      return {
     
      }
    }
    const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);
      
        const handleChange = e => {
          setValue(e.target.value);
        }
        return {
          value,
          onChange: handleChange
        }
      }
    export default connect(null,mapDispatchToProps)(SignIn)
  


