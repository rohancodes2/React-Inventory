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
function About2(props) {
  let history = useHistory();
  function handler() {
    history.push("/products/view");
  }

  const [products, setProducts] = useState(props.products);
  const [options, setOptions] = useState(props.products);
  const [productType, setPT] = useState([]);
  const [search, setSearch] = useState("");
  const [touch, touched] = useState(false);
  const [customised, customise] = useState([]);
  const [customised2, customise2] = useState([]);
  const [customised3, customise3] = useState([]);
  const [filter3, setFilter3] = useState(false);
  const [filter, setFilter] = useState(false);
  const [filter2, setFilter2] = useState(false);
  const [flag,setFlag]=useState(false)
  const toggle = () => {
    touched(!touch);
  };

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
  const mainFilter=()=>{
    console.log("here in mainfil")
    console.log(customised2)
   let prods=[]
   if(filter){
    customised.map((item)=>{
       prods= prods.concat(props.products.filter((i)=>{
             return( i.manufacturer.indexOf(item)!==-1)
         })) 
       setProducts(prods)
 })}
 if(filter2){
   console.log(filter2)
   let prods2=[]
   if(prods.length===0){prods=props.products}
 customised2.map((item)=>{
  prods2= [...prods2 ,...prods.filter((i)=>{
        return( i.productDescription.indexOf(item)!==-1)
    }) ]
    
    console.log('prods',prods2)
  setProducts(prods2)
})}
if(filter3){
  let prods2=[]
  if(prods.length===0){prods=props.products}
customised3.map((item)=>{
  prods2= [...prods2,...prods.filter((product)=>{
        return(product.price>(parseInt(item)-20000)&&product.price<(parseInt(item)))
    }) ]
  setProducts(prods2)
})

   }

  }


  const handleFilter = (e) => {
    
    switch (e.target.id) {
      case "brands":
        e.target.checked
          ? customise([...customised,e.target.value])
          : customise(
              customised.filter((i) => {
                if (i !== e.target.value) {
                  return i;
                }
              })
            );
          
        break;
      case "types":
        e.target.checked
          ? customise2([...customised2,e.target.value])
          : customise2(
              customised2.filter((i) => {
                if (i !== e.target.value) {
                  return i;
                }
              })
            );
    
        break;
      case "price":
        e.target.checked
          ? customise3([...customised3,e.target.value])
          : customise3(
              customised3.filter((i) => {
                if (i !== e.target.value) {
                  return i;
                }
              })
            );
        break;


    }
   
  //mainFilter()
  e.target.checked?setFlag(true):setFlag(false)
  };

  const blurit = () => {
    console.log(touched);
  };
  useEffect(() => {
    if (
      search === "" &&
      customised.length === 0 &&
      customised2.length === 0 &&
      customised3.length === 0
    ) {
      console.log("in here");
      setProducts(props.products);
      setOptions(props.options);
      setPT(props.productTypes);
     
      // setOptions(Array.from(new Set(props.products.map((item)=>{return item.name}))))
    }
    customised.length>0?setFilter(true):setFilter(false)
    customised2.length>0?setFilter2(true):setFilter2(false)
    customised3.length>0?setFilter3(true):setFilter3(false)
  });

  return (
    <div class="ggg">
      <div class="search-container gggxx  ">
        <div>
          {" "}
          <input
            class="input-text"
            id="inn"
            onChange={onChange}
            type="text"
            placeholder="Search any item..."
          ></input>
          <button class="btn btn-dark text-white" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      <div id='customise' style={{ width: 50 }}>
        <button onClick={toggle} className="btn btn-primary">
          Customise your product
        </button>
      </div>

      <CSSTransition
        in={touch}
        timeout={500}
        classNames="balloon"
        unmountOnExit
      >
        <div
          className="mx-auto hhhhh p2 row justify-content-center'"
          style={{ width: 500, height: 200, color: "black" }}
        >
          <ul>
            Brands
            <li>
              {options.map((item) => {
                return (
                  <div>
                    <input
                      type="checkbox"
                      id={"brands"}
                      value={item}
                      onClick={handleFilter}
                    />
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
                      <input
                        type="checkbox"
                        id={"types"}
                        value={item}
                        onClick={handleFilter}
                      />
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
                <input
                  type="checkbox"
                  id={"price"}
                  value={20000}
                  onClick={handleFilter}
                />
                <label>0-20000</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id={"price"}
                  value={40000}
                  onClick={handleFilter}
                />
                <label>20000-40000</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id={"price"}
                  value={60000}
                  onClick={handleFilter}
                />
                <label>40000-60000</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id={"price"}
                  value={80000}
                  onClick={handleFilter}
                />
                <label>60000-80000</label>
              </li>
            </ul>
            <button onClick={mainFilter}className='btn btn-primary'>Apply filter</button>
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

export default connect(mapStateToProps)(About2);
