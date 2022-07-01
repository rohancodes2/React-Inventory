import React from 'react';
import { Provider } from 'react-redux';
import configureStore from'redux-mock-store'
import store from '../Redux/Store';
import DeleteItem2 from './DeleteItem2';
import DeleteList2 from './DeleteList2';
import {shallow, mount} from './enzyme';

    const mockStore=  configureStore([])
       
    
describe('My Connected React-Redux Component', () => {
    let store;
   
    beforeEach(() => {
      store = mockStore({
        products:[],
      });
    });
   
    it('empty array passed', () => {
       let wrapper2 = shallow(<Provider store={store}><DeleteList2 data={[]}/></Provider>);
        let comp = wrapper2.find(<DeleteItem2/>);
        expect(comp.length).toEqual(0);
    });
    
  });
    
   
