import React, { Component } from 'react'
import "./dashboard.css";
import GeoChart from './GeoChart';
export default class CalorieWorld extends Component {
  constructor(props){
     super(props);
     this.state={
       year:1900
     }
  }
  render() {

        return (
            <html>
                <head>
                <meta charset="UTF-8"/>
                <title>D3 Final Project</title>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"/>
                </head>
                <body>
                <div id="nav">
                <h2>Calorie<sub>cal</sub> Dashboard</h2>
                <p>
                  Explore Calorie<sub>ca</sub> consumed by year. 
                  Current year: <span id="year-val"></span>
                  <input id="year" value={this.state.year} min="1900" max="2100" type="range" step="1" onChange={(e)=>{
                    this.setState({
                      year:e.target.value
                    })
                  }}/>
                </p>
            
                <p>Click on a country to see its trends by year.</p>
                </div>
                </body>
              <GeoChart year={this.state.year}/>
              </html>

        )
    }
}
