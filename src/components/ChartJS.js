import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.data
        
      }
    }  
  
  render(){
    return (
      <div className="chart">
        
        <Bar
          data={this.props.data}
          options={{
            title:{
              display:true,
              text:'Top Viewed products BAR GRAPH',
              fontSize:20
            },
            legend:{
              display:true,
              position: 'right'
            },
          }}
        />

        <Line
          data={this.props.data}
          options={{
            title:{
              display:true,
              text:'Top Viewed Products LINE GRAPH',
              fontSize:20
            },
            legend:{
              display:true,
              position: 'right'
            },
          }}
        />

        <Pie
          data={this.props.data}
          options={{
            title:{
              display:true,
              text:'Top Viewed Products PIE CHART',
              fontSize:20
            },
            legend:{
              display:true,
              position: 'right'
            },
          }}
        />

      </div>
    )
  }
}

export default Chart;