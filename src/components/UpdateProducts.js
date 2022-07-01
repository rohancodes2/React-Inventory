import React from 'react';
import { useFormik, yupToFormErrors } from 'formik';
import {connect} from 'react-redux'
import uuid from 'react-uuid'
import './UpdateProducts.css'
import * as Yup from 'yup';
import { updateProduct } from '../Redux/Actions/ActionCreators';
const UpdateProducts = (props) => {
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
        id:(props.product===undefined)?'': props.product.id,
      productName:(props.product===undefined)?'': props.product.productName,
      model:(props.product===undefined)?'':props.product.model,
      productDescription:(props.product===undefined)?'':props.product.productDescription,
      price:(props.product===undefined)?'':props.product.price,
      manufacturer:(props.product===undefined)?'':props.product.manufacturer,
      quantity:(props.product===undefined)?'':props.product.quantity,
      author:(props.product===undefined)?'':props.product.author,
      created:(props.product===undefined)?'':props.product.created,
      updated:(new Date()).toString(),
      
    },
    onSubmit: values => {
      
      props.updateProduct(values);
    
    
    },
    validationSchema

  });

  if(props.product===undefined){
return <div>Please select an item from Home tab to view details or <a href='/home'>Click here to redirect</a></div>

}else{
    
  return (
    <div style={{width:300}} className="updatecon">
    <form onSubmit={formik.handleSubmit}>
      <h1 class="textcolorx">Update Products</h1>
     <div  className='form-group'>
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
      </div>  <div  className='form-group'>
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
    </div> <div  className='form-group'> <label htmlFor="productDescription">Product Description</label>
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
    </div><div  className='form-group'> <label htmlFor="price">Price</label>
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
     </div> <div  className='form-group'>   <label htmlFor="quantity">Quantity</label>
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
    </div>  <div  className='form-group'> <label htmlFor="manufacturer">Manufacturer</label>
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

    </div>   
    <div  className='form-group'>   <label htmlFor="author">Product Description</label>
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
    </div> <p>
 <label htmlFor="created">  Created on:  {formik.values.created}</label>
     <label htmlFor="updated">Last Updated on:  {formik.values.updated.toString()}</label></p>
      <button type="submit" className='btn btn-primary btn-lg'>Submit</button>
    </form>
    </div>
  );

}
};

const mapStateToProps = state =>{
    return {
      products: state.products,
      product:state.product
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
      updateProduct:(values)=>dispatch(updateProduct(values))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(UpdateProducts)
