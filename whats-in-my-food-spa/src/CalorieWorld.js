import React, { Component } from 'react'
import "./css/dashboard.css";
import GeoChart from './GeoChart';
export default class CalorieWorld extends Component {
 
  render() {

        return (
            <html>
                <head>
                <meta charset="UTF-8"/>
                <title>D3 Final Project</title>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"/>
                </head>
                <body>
                <div id="mapNav">
                <h2>Calorie<sub>cal</sub> Dashboard</h2>
                <h2>
                  Explore Calorie<sub>ca</sub> consumed throughout the globe in the year 2013.
                </h2>
            
                </div>
                </body>
              <GeoChart/>
              </html>

        )
    }
}
