import React, { Component } from 'react'
import data from "./data/GeoChart.world.geo.json";
import Map from './Map';
export default class GeoChart extends Component {
 
  render() {
   
    return (
      <div>
        <h1> Welcome to Calorie Map </h1>
        <Map data={data}/>
      </div>
    )
  }
}
