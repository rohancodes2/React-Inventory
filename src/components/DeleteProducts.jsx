import React, { Suspense, useEffect, useState,lazy } from "react";
import {connect} from 'react-redux'
//import DeleteList2 from "./DeleteList2";
const DeleteList2= lazy(()=>import('./DeleteList2'))
function DeleteProducts(props) {



const [list,setList]=useState(props.products);


useEffect(()=>{
  console.log("useEffect in delete products",props.products)
setList(props.products);

})
  return <div><Suspense fallback={<div>Loading</div>}>
    <DeleteList2 list ={list}/></Suspense></div>
      
}

const mapStateToProps = state =>{
  return {
    products: state.products
  }
}
// const mapDispatchToProps = dispatch =>{
//   return {
//     getProduct:()=>dispatch(getProduct)
//   }
// }

export default connect(mapStateToProps)(DeleteProducts)