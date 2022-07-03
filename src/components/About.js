import React, { useEffect, useState, lazy, Suspense } from "react";
import {
  useHistory,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import "./About.css";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./About2.css";
import { SubItems1 } from "../data/NavbarItems";
const ProductList = lazy(() => import("./ProductList"));
export function About(props) {
  let history = useHistory();
  function handler() {
    history.push("/products/view");
  }

  const [products, setProducts] = useState(props.products);
  const [options, setOptions] = useState(props.products);
  const [productType, setPT] = useState([]);
  const [search, setSearch] = useState("");
  const [touch, touched] = useState(false);
  const [customised,customise]= useState([]);
  const [customised2,customise2]= useState([]);
  const [customised3,customise3]= useState([]);
  const [filter3,setFilter3]=useState(false)
  const [filter,setFilter]=useState(false)
  const [filter2,setFilter2]=useState(false)
  const toggle = () => {
    touched(!touch);
  };
  
  const mainFilter2=(m)=>{
    //  if(customised.length>0){
    //    doubleFilter()
    //  }
    console.log("in mainfilter2 products",products)
     console.log(customised2)
     console.log('mainfilter2 called')
    let prods=[]
    
    customised2.map((item)=>{
      if(m){
     prods= prods.concat(
        products.filter((product) => {
        return (
          (product.productDescription
            .indexOf(item) !== -1 )
        );
      }
      ))}else{
        prods= prods.concat(
          products.filter((product) => {
          return (
            (product.productDescription
              .indexOf(item) === -1 )
          );
        }
        ))
      }})
      console.log("prods in mainfilter2",prods)
      setProducts(prods)
  }

  const mainFilter=()=>{
    //  if(customised.length>0){
    //    doubleFilter()
    //  }
     console.log(customised)
     console.log('mainfilter called')
    let prods=[]
    
    customised.map((item)=>{
      
     prods= prods.concat(
        props.products.filter((product) => {
        return (
          (product.manufacturer
            .indexOf(item) !== -1 ||product.productDescription
            .indexOf(item) !== -1 )
        );
      }
      ))})
      console.log("prods in mainfilter1",prods)
      setProducts(prods)
  }
  const mainFilter3=()=>{
    //  if(customised.length>0){
    //    doubleFilter()
    //  }

     console.log('mainfilter3 called')
    let prods=[]
    
    customised3.map((item)=>{
      
     prods= prods.concat(
        products.filter((product) => {
        return (
          (product.price>(parseInt(item)-20000)&&product.price<(parseInt(item)))
            
        );
      }
      ))})
      console.log("prods in mainfilter3",prods)
      setProducts(prods)
  }
  const handleFilter = (e) => {
    console.log(e.target.checked)
    console.log(e.target.value);
   (e.target.checked)?
   customised.push(e.target.value)
  :customise(customised.filter((i)=>{ if(i!==e.target.value){
     return i;
   }}));
  e.target.checked?setFilter(false):setFilter(true)
 mainFilter()
}
const handleFilter2 = (e) => {
  console.log(e.target.checked)
  console.log(e.target.value);
 (e.target.checked)?
 customised2.push(e.target.value)
:customise2(customised2.filter((i)=>{ if(i!==e.target.value){
   return i;
 }}));
 if(e.target.checked){setFilter(false)
  mainFilter2(true)}
 else{ mainFilter2(false); setFilter(true)}
console.log("in handler filter 2",products)

}

const handleFilter3 = (e) => {
  console.log(e.target.checked)
  console.log(e.target.value);
 (e.target.checked)?
 customised3.push(e.target.value)
:customise3(customised3.filter((i)=>{ if(i!==e.target.value){
   return i;
 }}));
e.target.checked?setFilter3(false):setFilter3(true)
console.log("in handler filter 3",products)
mainFilter3()
}

    // let filteredProducts = products.filter((product) => {
    //   return (
    //     (product.manufacturer
    //       .toLowerCase()
    //       .indexOf(e) !== -1 )
    //   );
    // });
    // setProducts(filteredProducts);

  
  const handleClick = () => {
    let filteredProducts = products.filter((product) => {
      return (
        product.productName
          .toLowerCase()
          .indexOf(search.toLowerCase().trim()) !== -1
      );
    });
    setProducts(filteredProducts);
  };

  const onChange = (event) => {
    setSearch(event.target.value);
    console.log("Change recorded");
    console.log(event.target.value);
    handleClick();
   
  };

  const blurit =()=>{
  console.log(touched);
  }
  useEffect(() => {
    if (search === ""&&(customised.length===0&&customised2.length===0&&customised3.length===0)) {
      console.log("in here");
      setProducts(props.products);
      setOptions(props.options);
      setPT(props.productTypes);
     // console.log(customised)
      // setOptions(Array.from(new Set(props.products.map((item)=>{return item.name}))))
     
    }

    if(filter){
      setFilter(false)
      mainFilter()}
      if(filter2){  
        setFilter2(false)
        mainFilter2(true)}
        if(filter3){
          setFilter3(false)
          mainFilter3()}
console.log(customised3)
  });

  return (
    <div class="ggg">
      <div class="search-container ggg  ">
        <div>
          {" "}
          <input
            class="input-text"
            id="inn"
            onChange={onChange}
            type="text"
            placeholder="Search any item..."
          ></input>
          <button
            class="btn btn-dark text-white"
         
            onClick={handleClick}
            
          >
            Search
          </button>
        </div>
      </div>
      <div class="mx-auto" style={{ width: 50 }}>
        <button onClick={toggle} className='btn btn-primary'>Customise your product</button>
      </div>
      <img src='../AboutPageScreenshot.png'>f</img>
      <CSSTransition
        in={touch}
        timeout={500}
        classNames="balloon"
        unmountOnExit
      >
        <div
          className="mx-auto hhhhh p2 row justify-content-center'"
          style={{ width: 700, height: 150,color:'black' }}
        >
          <ul>
            Brands
            <li>
              {options.map((item) => {
                return (
                  <div>
                    <input type="checkbox" value={item}onClick={handleFilter} />
                    <label>{item}</label>
                  </div>
                );
              })}
            </li>
          </ul>
          <div>
            {" "}
            <ul>
              ProductType
              <li>
                {productType.map((item) => {
                  return (
                    <div>
                      <input type="checkbox" value={item} onClick={handleFilter2} />
                      <label>{item}</label>
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
          <div>
            <ul>
             Price Range
              <li>
                <input type="checkbox" value={20000} onClick={handleFilter3}/>
                <label>0-20000</label>
              </li>
              <li>
                <input type="checkbox" value={40000} onClick={handleFilter3}/>
                <label>20000-40000</label>
              </li>
              <li>
                <input type="checkbox" value={60000} onClick={handleFilter3} />
                <label>40000-60000</label>
              </li>
              <li>
                <input type="checkbox" value={80000} onClick={handleFilter3} />
                <label>60000-80000</label>
              </li>
            </ul>
          </div>
        </div>
      </CSSTransition>
      <Suspense fallback={<div>Loading</div>}>
        <ProductList list={products}></ProductList>
      </Suspense>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    options: state.brands,
    productTypes: state.productTypes,
  };
};

export default connect(mapStateToProps)(About);
