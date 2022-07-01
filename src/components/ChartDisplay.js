import React from 'react';
import ChartJS from './ChartJS.js'
import './ChartDisplay.css'
import {connect} from 'react-redux'
 function ChartDisplay(props){


return <div class='main1'><ChartJS data={props.chartData}></ChartJS></div>

}
const mapStateToProps = state =>{
    return {
      products: state.products,
      chartData:state.chartData
    }
  }
  
  
  export default connect(mapStateToProps)(ChartDisplay)