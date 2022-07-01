import {GET_PRODUCT,ADD_PRODUCT,INITIALIZE_PRODUCT,SET_PRODUCT,SIGN_IN, DELETE_PRODUCT,UPDATE_PRODUCT, UPDATE_USER} from '../Actions/Actions'
import store from '../Store';

const initialState={
products:[],
product:[],
brands:[],
productTypes:[],
chartData:[],
auth :false
}
 const crudReducer =(state=initialState,actionCreator)=>{
    switch(actionCreator.type){
        case INITIALIZE_PRODUCT: console.log('initialize product in reducer'); return{
            products:actionCreator.products,
            brands:Array.from(new Set(actionCreator.products.map((item)=>{return item.manufacturer}))),
            productTypes:Array.from(new Set(actionCreator.products.map((item)=>{return item.productDescription}))),
            chartData:actionCreator.chartData
        }
        case GET_PRODUCT: console.log('get product in reducer');return{
            ...state,
            products:state.products
        }
        case SET_PRODUCT: console.log('set product in reducer');return{
            ...state,
            product:actionCreator.product
        }
        case DELETE_PRODUCT: return{
           
            products:actionCreator.products
        }
        case SIGN_IN: return{
               ...state,
               auth:actionCreator.auth
        }
        case ADD_PRODUCT :return {
         ...state,
         products:state.products.concat(actionCreator.product)
        }
        case UPDATE_USER :return {
            ...state,
           }
        case UPDATE_PRODUCT :return {
            ...state,
           }
        default: return state
    }
}
export default crudReducer;