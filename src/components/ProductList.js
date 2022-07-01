import React from "react";
import ProductItem from "./ProductItem";
export default function ProductList(props) {
  console.log(props.list)
  return <div class='container mt-4'>
    <div class='row justify-content-center'>
    
        {
         props.list.map((index)=>{
            
          return <ProductItem data={index} />
        })}
    
      </div>  
  </div>;
}
