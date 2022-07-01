import React, { Component,useState,useEffect } from "react";
import { deleteProduct, setProduct } from "../Redux/Actions/ActionCreators";
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './DeleteItem.css'

class DeleteItem2 extends Component {
    constructor(props){
        super(props);
        //console.log("in item2"+props.selectAll)
       this.state = {
            checked:false,
            product:this.props.data
           }
    }
    
   handler=(e)=>{
        this.props.setProduct(this.props.data)
        
        
         }
     
    
     onChange=(e)=>{
        if(e.target.checked){
            console.log('change recorded +ve',this.state.checked)
            this.props.selectItems(true,this.state.product)
this.setState({checked:true})
        }else{
            console.log('change recorded -ve',this.state.checked)
            this.props.selectItems(false,this.state.product)
this.setState({checked:false})     
        }
        this.forceUpdate();
      }
      componentWillReceiveProps(nextProps) {
        this.setState({ checked: nextProps.selectAll ,
                         product:nextProps.data });  
      }
      delItems=()=>{
        this.props.selectItems(false,this.state.product)
        if (window.confirm("Are you sure you want to delete this item?")){
           
            axios.delete(`http://localhost:3000/products/${this.state.product.id}`)
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
            console.log("In del items",this.state.product)
            deleteProduct(this.state.product);
            this.props.deleted(this.state.product)
          
        }
         
        
      }
    render() {
        return (<div> 
    
             <div class="card w-75 maincontainer col-md-8">
          <label class="container "><input type="checkbox" onChange={this.onChange}checked={this.state.checked}/>
          <span class="checkmark"></span></label>
          
          <div class="card-body ">
            <h5 class="card-title"> {this.state.product.productName}</h5><p style={{fontSize:'7'}}>ID:{this.state.product.id}</p>
        <p>
           &nbsp;&nbsp; Price: <p style={{display:"inline",color:'red'}} >₹{this.state.product.price}</p>
           &nbsp;&nbsp;Description: {this.state.product.productDescription}
           &nbsp;&nbsp;Manufacturer: {this.state.product.manufacturer} 
           </p>
           <div style={{float:'right'}}>
           <button id="delete" onClick={this.delItems}class="btn darkitem text-white btn-lg  ">delete</button>&nbsp;
           </div>
            
          </div>
        </div> </div>  );
    }
}

       // 
       
       

const mapStateToProps = state =>{
  return {
    products:state.products,
    product: state.product
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    deleteProduct:prod=>dispatch(deleteProduct(prod)),
    setProduct:prod=>dispatch(setProduct(prod))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeleteItem2);