import React from "react";
import { setProduct } from "../Redux/Actions/ActionCreators";
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";
import './ProductItem.css'
import { recordHit } from "./ProductApi/ProductApi";
function ProductItem(props) {

  let history = useHistory();
  function handler(e){

    props.setProduct(props.data)
   
    switch(e.target.id){
      case 'view': history.push('/products/view')
                   recordHit(props.data.id,props.data.hits+1)
                     break;
      case 'edit':  history.push('/products/update')
                     break;
      case 'delete':  history.push('/products/delete')
                       break;
   
    }
  // 
  }
 
  return (<div class='col-md-4 col-8 p-2'>
    
    <div class="card">
  
  <div class="card-body text-center">
    <h5 class="card-title" style={{color:'#F7882F'}}> {props.data.productName}</h5>
<p style={{display:"inline",color:' #cf430b'}}> ₹{props.data.price}</p>
<p class="card-text text-center">{props.data.productDescription}</p>
<p class="card-text text-center">{props.data.manufacturer}</p>
    <div style={{position:'relative'}}>
    <button id="view" onClick={handler}class="btn kkk text-white">view</button>&nbsp;
    <button id="edit" onClick={handler}class="btn darkitem2 text-white">edit</button>&nbsp;
    <button id="delete" onClick={handler}class="btn darkitem text-white">delete</button>&nbsp;
    </div>
    
  </div>
</div>
         
  </div>)
}
const mapStateToProps = state =>{
  return {
    products:state.products,
    product: state.product
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    setProduct:prod=>dispatch(setProduct(prod))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)