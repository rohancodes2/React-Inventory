import React from 'react';
import {shallow, mount} from './enzyme';
import Chart from './ChartJS'
import { Bar, Pie } from 'react-chartjs-2';


const chartData= {
    labels:['ss','ss','ss'],
    datasets:[
      {
        label: "TOP VIEW HITS",
        data:[3,5,7],
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

   
   
    it('check if one Pie chart is rendered', () => {
       
       
       
        let wrapper = shallow(<Chart data={chartData}/>);
        
        expect(wrapper.find(Pie).length).toEqual(1);
    });
     
    it('check if one Bar graph is rendered', () => {
       
       
       
        let wrapper = shallow(<Chart data={chartData}/>);
        
        expect(wrapper.find(Pie).length).toEqual(1);
    });
    
     
    it('check if one Line graph is rendered', () => {
       
       
       
        let wrapper = shallow(<Chart data={chartData}/>);
        
        expect(wrapper.find(Pie).length).toEqual(1);
    });
    
    
