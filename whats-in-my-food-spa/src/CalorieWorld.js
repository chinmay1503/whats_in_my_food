import React, { Component } from "react";
import "./css/dashboard.css";
import GeoChart from "./GeoChart";

export default class CalorieWorld extends Component {

  render() {
    return (
      <div>
        <div id="mapNav">
          <h2>
            Calorie<sub>cal</sub> Dashboard
          </h2>
          <h2>
            Explore Calorie<sub>ca</sub> consumed throughout the globe in the
            year 2013.
          </h2>
        </div>
        <GeoChart />
      </div>
    );
  }
}
