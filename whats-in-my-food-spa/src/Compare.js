import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import "../src/css/productStyles.css";
import "./css/compareStyles.css";
import FoodProductApi from "./services/FoodProductApi";
import ToastNotification from "./services/ToastNotification";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product1: "",
      product2: "",
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    FoodProductApi.get("/api/listAllProductNames/1").then(
      (result) => {
        this.setState({
          products: result.data.data.products,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleChange(e) {
    const product = e.target.name;
    this.setState({
      [product]: e.target.value,
    });
  }

  isProductPresentInDb(prod) {
    if (prod !== "" && this.state.products.length > 0) {
      let products = this.state.products.filter(
        (product) =>
          product.food_name.trim().toUpperCase() === prod.trim().toUpperCase()
      );
      return products.length > 0 ? true : false;
    }
  }

  handleSubmit(e) {
    let flag1 = this.isProductPresentInDb(this.state.product1);
    let flag2 = this.isProductPresentInDb(this.state.product2);
    if (flag1 && flag2) {
      this.props.history.push(
        `/compareProducts/${this.state.product1}/${this.state.product2}`
      );
    } else if (!flag1 && !flag2) {
      ToastNotification.showErrorMessage(
        "bottom-center",
        "Both Products are not present in Database, Please search for a different Products"
      );
    } else if (!flag1) {
      ToastNotification.showErrorMessage(
        "bottom-center",
        `${this.state.product1} not present in Database, Please search for a different Product`
      );
    } else {
      ToastNotification.showErrorMessage(
        "bottom-center",
        `${this.state.product2} not present in Database, Please search for a different Product`
      );
    }
    e.preventDefault();
  }

  render() {
    return (
      <HashRouter>
        <ToastContainer />
        <h1 className="heading" style={{ textAlign: "center" }}>
          Compare Products
        </h1>
        <div className="compareContainer">
          <span className="compareproductText">Product 1:</span>{" "}
          <input
            className="productInput"
            type="text"
            name="product1"
            value={this.state.product1}
            onChange={this.handleChange}
          />
          <h3 className="versus">V/S</h3>
          <span className="compareproductText">Product 2:</span>{" "}
          <input
            className="productInput"
            type="text"
            name="product2"
            value={this.state.product2}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-primary compareSubmit"
            value="Compare"
            onClick={this.handleSubmit}
          >
            Compare
          </button>
        </div>
      </HashRouter>
    );
  }
}

export default Compare;
