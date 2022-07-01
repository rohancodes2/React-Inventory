
import { addProducts, getChart, recordHit, SignIn, updateProducts, updateRegistrations } from '../../components/ProductApi/ProductApi'
import {GET_PRODUCT,ADD_PRODUCT, INITIALIZE_PRODUCT, SET_PRODUCT,SIGN_IN, DELETE_PRODUCT,UPDATE_PRODUCT, UPDATE_USER} from './Actions'



export const getProduct = ()=>{
    return{
        type: GET_PRODUCT

    }
}
export const addProduct = (prod)=>{
    return{
        type: ADD_PRODUCT,
        product:addProducts(prod)
    }
}
export const updateProduct = (prod)=>{
    return{
        type: UPDATE_PRODUCT,
        product:updateProducts(prod)
    }
}
export const updateUser = (user)=>{
    return{
        type: UPDATE_USER,
        product:updateRegistrations(user)
    }
}
export const initializeProduct = (prod)=>{
    console.log("intialize called argument is",prod)
    return{
        type: INITIALIZE_PRODUCT,
        products:prod,
        chartData:getChart(prod)}
}
export const setProduct = (prod)=>{
    console.log("set product",prod)
    return{
        type: SET_PRODUCT,
        product:prod
    }}
    export const deleteProduct =(prod)=>{
        return{
            type:DELETE_PRODUCT,
            product:prod
        }
    }
     
    export const signIn =(user,pass)=>{
        return{
            type:SIGN_IN,
            auth: SignIn(user,pass)
        }
    }
     
    
