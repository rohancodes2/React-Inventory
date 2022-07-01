import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';
import { mount, shallow } from './components/enzyme';

it('check if Navbar is rendered', () => {
  let wrapper = shallow(<App/>);
  
  expect(wrapper.find(Navbar).length).toEqual(1);
});
describe('full dom rendering', () => {
  let wrapper;

beforeEach(() => {

  wrapper= mount(<App/>);
})
it('full dom rendering', () => {

  expect(wrapper).toMatchSnapshot();
});


})