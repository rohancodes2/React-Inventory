import React from 'react';
import axios from 'axios';
import { getAllByText } from '@testing-library/react';


export const SignIn=(user,pass)=>
{
  
}
export const addProducts=(product)=>{
    console.log('in here')
    axios.post('http://localhost:3000/products',product )
    .then(function (response) {
      console.log(response);
      alert("Added successfully")
   window.location.reload();
    return product;


    })
    .catch(function (error) {
      console.log(error);
      return [];
    });


}
export const updateProducts=(product)=>{
    console.log('in her',product.id)
    axios.put(`http://localhost:3000/products/${product.id}`,product )
    .then(function (response) {
      console.log(response);
      alert("Updated successfully")
   window.location.reload();
    return product;


    })
    .catch(function (error) {
      console.log(error);
      return [];
    });


}
export const updateRegistrations=(user)=>{
 
  axios.put(`http://localhost:3002/users/${user.username}`,user )
  .then(function (response) {
    console.log(response);
    alert("Updated successfully")
 window.location.reload();
  return user;


  })
  .catch(function (error) {
    console.log(error);
    return [];
  });


}
export const getChart=(data)=>{
  //...do something here with the data
      console.log("in getChart()",data)
      let unique = data.filter(function(item, pos){
        return data.indexOf(item)== pos; 
      });
     
      let labels= unique.map((item)=>{
          return item.productName
      })
      let datareal= unique.map((item)=>{
          return item.hits
      })
      console.log(datareal)
     const chartData= {
        labels:labels,
        datasets:[
          {
            label: "TOP VIEW HITS",
            data:datareal,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }     ]

}
console.log(chartData)

return chartData;
}

export const recordHit=(id,hit)=>{
    console.log('Hit recorded for',id)
    axios.patch(`http://localhost:3000/products/${id}`,{"hits":hit} )
    .then(function (response) {
      console.log(response);
      //alert("Updated successfully")
  // window.location.reload();
    


    })
    .catch(function (error) {
      console.log(error);
      return [];
    });


}