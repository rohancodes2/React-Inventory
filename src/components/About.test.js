import React from 'react';
import { Provider } from 'react-redux';
import configureStore from'redux-mock-store'
import store from '../Redux/Store';
import {shallow, mount} from './enzyme';
import ProductItem from './ProductItem';
import ProductList from './ProductList';
import ViewDetails from './ViewDetails';

    const mockStore=  configureStore([])
       
    
describe('My Connected React-Redux Component', () => {
    let store;
   
    beforeEach(() => {
      store = mockStore({
        products:[],
      });
    });
   
    it('empty array passed to about', () => {
        let wrapper2 = shallow(<Provider store={store}><ProductList data={[]}/></Provider>);
         let comp = wrapper2.find(<ProductItem/>);
         expect(comp.length).toEqual(0);
     });
    
  });
    
   
