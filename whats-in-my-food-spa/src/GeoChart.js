import React, { Component } from 'react'
import data from "./data/GeoChart.world.geo.json";
import Map from './Map';
export default class GeoChart extends Component {
 
  render() {
   
    return (
      <div>
        <h1> Welcome to GeoChart of year :{this.props.year}</h1>
        <Map data={data} year={this.props.year}/>
      </div>
    )
  }
}
