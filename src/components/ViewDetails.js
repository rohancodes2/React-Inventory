import React from "react";
import { connect } from 'react-redux';
import './ViewDetails.css'
function ViewDetails(props) {
  console.log("In view details",props.product)
    if(props.product===undefined){
return <div>Please select an item from Home tab to view details or <a className='linktag' href='/home'>Click here to redirect</a></div>

}else{
return <div
><div class="card ">
<div class="card-header">
Product Details      <a href="#" class="w3-right btn btn-primary">Edit</a>
</div>
<div class="card-body">

<p class="label cba">Product Name:<p class="data cbac"> {props.product.productName}</p></p>
<p class="label cba">Model:<p class="data cbac"> {props.product.model}</p></p>
<p class="label cba">Price:<p class="data cbac"> ₹{props.product.price}</p></p>
<p class="label cba">Quantity: <p class="data cbac"> {props.product.quantity}</p></p>
<p class="label cba">Description: <p class="data cbac"> {props.product.productDescription}</p></p>
<p class="label cba">Manufacturer:<p class="data cbac"> {props.product.manufacturer}</p></p>
<p class="label cba">Author:<p class="data cbac"> {props.product.author}</p></p>
<p class="label cba">Created on:<p class="data cbac"> {props.product.created}</p></p>
<p class="label cba">Last Updated on: <p class="data cbac"> {props.product.updated}</p></p>

  
</div>

</div></div>
}

  
}
const mapStateToProps = state =>{
    return {
      products: state.products,
      product:state.product
    }
  }

  export default connect(mapStateToProps)(ViewDetails)