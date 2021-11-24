import React, { Component } from 'react'
import "./dashboard.css";
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
                <div id="nav">
                <h2>Calorie<sub>cal</sub> Dashboard</h2>
                <p>
                  Explore Calorie<sub>ca</sub> consumed by year.
                </p>
            
                <p>Click on a country to see its trends by year.</p>
                </div>
                </body>
              <GeoChart/>
              </html>

        )
    }
}
