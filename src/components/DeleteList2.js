
import React, { Component } from 'react';
import DeleteItem2 from "./DeleteItem2";
import axios from 'axios';
import { connect } from 'react-redux';
import ProductItem from "./ProductItem";

 

class DeleteList2 extends Component {
   
  state = {
        checked: false,
        deleteItems:[],
        count:0,
        show:this.props.list
      }
    handleClick=(e)=>{
        console.log("inside handleclick",   e.target.checked)
  e.target.checked?
  this.setState({checked:true,deleteItems:this.state.show,count:this.state.deleteItems.length})
  :this.setState({checked:false, deleteItems:[],count:0});
   
     console.log(this.state.deleteItems);  
     console.log("Here I am length",this.state.deleteItems.length);
     this.forceUpdate();
    }
    delItems=()=>{
        if (window.confirm("Are you sure you want to delete this item?")){
         this.state.deleteItems.map((item)=>{
           
            axios.delete(`http://localhost:3000/products/${item.id}`)
            .then(res => {
              console.log(res);
              this.deleted(item);
              console.log(res.data);
            })
           })
         
        }
        this.setState({deleteItems:[]})
      //  window.location.reload();
    }
  selectItems=(value,data)=>{
    console.log("back in list",value,data)
      if(value) {this.state.deleteItems.push(data)}
      else{
        this.setState({deleteItems:this.state.deleteItems.filter(function(item) {
            return item !== data
        })})
        
      }  
      this.forceUpdate()
    
  }
  componentWillReceiveProps(nextProps) {
      console.log("componentwillreceive")
    this.setState({ 
                     show:nextProps.list });  
  }
  deleted=(data)=>{
      console.log("called",data);
        let prod= this.state.show.filter(function(item) {
        return item !== data
    })
    console.log('after deleteion',prod)
    this.setState({show:prod,count:this.state.count-1})
  
    this.forceUpdate()
  
  }
    render() { 
        return (<div class='container mt-4'>
      <label class="container" style={{float:'left'}}>
      <input onChange={this.handleClick} type="checkbox"  />Select All
      <span class="checkmark"></span>(Selected:{this.state.deleteItems.length}) 
      <button id="delete" style={{float:'center'}} onClick={this.delItems} class=" btn text-white darkitem ">delete</button>
        </label>
        
           {console.log("show",this.state.show)}
           {console.log("list",this.props.list)}
           {this.state.show.length}
        <div style={{float:'center'}}>
          <ul>
            <li class='w3-display-container '>
            { this.state.show.map((index)=>{
                
              return <DeleteItem2 data={index} deleted={this.deleted} selectItems={this.selectItems} selectAll={this.state.checked} />
            })}
           </li>
         
          </ul>
          </div>
      </div>);
    }
}
const mapStateToProps = state =>{
    return {
      products: state.products
    }
  }
 
export default connect(mapStateToProps)(DeleteList2)
