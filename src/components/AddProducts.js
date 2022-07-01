import React, { useState } from 'react';
import { useFormik, yupToFormErrors } from 'formik';
import uuid from 'react-uuid'
import * as Yup from 'yup';

import {connect} from 'react-redux'
import './AddProducts.css'
import { addProducts } from './ProductApi/ProductApi';
import {addProduct } from '../Redux/Actions/ActionCreators';
import { Prompt } from 'react-router-dom';
const AddProducts = (props) => {
  const validationSchema = Yup.object(
   {
       productName: Yup.string().required(
           '*Product Name is required'
       ),
       model: Yup.string().required(
        '*Model is required'
       ),
       productDescription: Yup.string().required(
        '*productDescription is required'
       ),
       price: Yup.number().required(
        '*Price is required'
       ),
       quantity: Yup.number().required(
        '*Quantity is required'
       ),
       author: Yup.string().required(
        '*author is required'
       ),
   })
  
  const formik = useFormik({
    initialValues:{
      id:uuid(),
      productName: '',
      model:'',
      manufacturer:'',
      productDescription:'',
      price:'',
      quantity:'',
      author:'',
      created: (new Date()).toString(),
      updated:(new Date()).toString()

    },
    handleChange:console.log(),
    
    onSubmit: values => {
      console.log(values)
      
    // let x=JSON.stringify(values, null, 2);
     //ProductActions.addProduct(x)
    props.addProduct(values);
    },
    validationSchema

  });
 
  return (
    <div  style={{width:300}}>
    <Prompt
    when={formik.touched}
    message='You have unsaved changes, are you sure you want to leave?'
  />
    <form onSubmit={formik.handleSubmit}>
      <div className='form-group'>
      <p className='HH'>Add Products</p>
      <label htmlFor="name">Product Name</label>
      <input
       className='form-control'
        id="name"
        name="productName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.productName}
      /> 
      {formik.errors.productName &&formik.touched.productName?<div><h7 style={{color: "red"}}>{formik.errors.productName}</h7></div>:null}<br></br>
      </div>
      <div className='form-group'>
      <label htmlFor="model">Model</label>
      <input
      className='form-control'
        id="model"
        name="model"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.model}
      /> 
    {formik.errors.model&&formik.touched.model?<div><h7 style={{color: "red"}}>{formik.errors.model}</h7></div>:null}<br></br>
  
  </div>  <div className='form-group'>
    <label htmlFor="productDescription">Product Description</label>
      <input
      className='form-control'
        id="productDescription"
        name="productDescription"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.productDescription}
      /> 
    {formik.errors.productDescription&&formik.touched.productDescription?<div><h7 style={{color: "red"}}>{formik.errors.productDescription}</h7></div>:null}<br></br>
   </div> <div className='form-group'>
    <label htmlFor="price">Price</label>
    <input
    className='form-control'
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.price}
      />
     {formik.errors.price&&formik.touched.price?<div><h7 style={{color: "red"}}>{formik.errors.price}</h7></div>:null}
    </div> <div className='form-group'>
        <label htmlFor="quantity">Quantity</label>
      <input
      className='form-control'
        id="quantity"
        name="quantity"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.quantity}
      /> 
    {formik.errors.quantity&&formik.touched.quantity?<div><h7 style={{color: "red"}}>{formik.errors.quantity}</h7></div>:null}<br></br>
   </div> <div className='form-group'> 
    <label htmlFor="manufacturer">Manufacturer</label>
      <input
      className='form-control'
        id="manufacturer"
        name="manufacturer"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.manufacturer}
      /> 
    {formik.errors.manufacturer&&formik.touched.manufacturer?<div><h7 style={{color: "red"}}>{formik.errors.manufacturer}</h7></div>:null}<br></br>
   </div> <div className='form-group'>
     <label htmlFor="author">Author</label>
      <input
      className='form-control'
        id="author"
        name="author"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.author}
      /> 
    {formik.errors.author&&formik.touched.author?<div><h7 style={{color: "red"}}>{formik.errors.author}</h7></div>:null}<br></br>
    </div>
  <label htmlFor="created">  Created on:  {formik.values.created.toString()}</label>
 <p><label htmlFor="updated">Last Updated on:  {formik.values.updated.toString()}</label></p>
      <button type="submit" className='btn btn-primary btn-lg'>Submit</button>
    
    </form>
    </div>
  );

  
};
const mapDispatchToProps = dispatch =>{
    return {
      addProduct:(values)=>dispatch(addProduct(values))
    }
  }
  
  export default connect(null,mapDispatchToProps)(AddProducts)
