import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import { Animated, Easing } from 'react-native';
import CalorieNinjaApi from "./services/CalorieNinjaApi";
import FoodProductApi from "./services/FoodProductApi";
import "./css/productStyles.css";

class CompareFoodProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      product1_Name: "",
      product1_ImgUrl: "",
      product2_Name: "",
      product2_ImgUrl: "",
      spinAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.loop(Animated.timing(
      this.state.spinAnim,
    {
      toValue: 100,
      duration: 300000,
      easing: Easing.linear,
      useNativeDriver: true
    }
  )).start();
    var product1 = this.props.match.params.product1;
    var product2 = this.props.match.params.product2;
    this.getProduct1Details(product1)
    this.getProduct2Details(product2)
    this.fetchProductStats(product1, "product1")
    this.fetchProductStats(product2, "product2")
  }

  fetchProductStats = (prodName, inputName) => {
    var api = "nutrition?query=" + prodName;
    CalorieNinjaApi.get(api).then(
      (result) => {
        let items = this.state.items;
        let key = inputName;
        let val = result.data.items[0];
        let obj = {}
        obj[key] = val;
        (inputName === "product1") ? items.unshift(obj) : items.push(obj)
        this.setState({
          isLoaded: true
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  getProduct2Details = (product1) => {
    FoodProductApi.get(`/api/searchProductByName/${product1}`).then(
      (result) => {
        if (result.data && result.data.data && result.data.data.products) {
          let product = result.data.data.products[0];
          this.setState({
            product2_Name: product.food_name,
            product2_ImgUrl: product.image_url,
          });
        }
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error: error,
        });
      }
    );
  }

  getProduct1Details = (product1) => {
    FoodProductApi.get(`/api/searchProductByName/${product1}`).then(
      (result) => {
        if (result.data && result.data.data && result.data.data.products) {
          let product = result.data.data.products[0];
          this.setState({
            product1_Name: product.food_name,
            product1_ImgUrl: product.image_url,
          });
        }
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error: error,
        });
      }
    );
  }

  render() {
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const carrotStyle  = {
      transform: [{rotate: spin}],
      position: "absolute",
      top: "5vw",
      left: "5vw",
      right: "5vw",
      bottom: "5vw",
      height: "10vw",
      width: "10vw"

    }
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div class = "text-center errorMessage">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
        <div className = "loadingContainer">
            <img className = "plate" src = "../images/loadingIcon.png" alt = "background"/>
            <Animated.Image style={carrotStyle} source = "../images/ingredientIcon3.png" alt = "carrot"/>
        </div>
        <h1 className = "text-center loadingText">Gathering Nutrients.....</h1>

      </div>)
    } else {
      if (items) 
      {
        if (Array.isArray(items) && items.length == 2 && items[0]["product1"] && items[1]["product2"])
        {
          var product1 = items[0]["product1"];
          var product2 = items[1]["product2"];
          return (
              <div className = "contentContainer">
                <div className = "productContainer">
                  <h1 className = "text-center">{this.state.product1_Name}</h1>
                  <div className = "divider"></div>
                  <div className = "photoHolder">
                    <img className = "productImage" alt="productImage" src = {`${this.state.product1_ImgUrl}`}/>
                  </div>
                  <h3 className="versus">V/S</h3>
                  <h1 className = "text-center">{this.state.product2_Name}</h1>
                  <div className = "photoHolder">
                    <img className = "productImage" alt="productImage" src = {`${this.state.product2_ImgUrl}`}/>
                  </div>
                  <div className = "stepsContainer">
                    <h2 className = "productText">Nutritional Statistics</h2>
                  </div>
                </div>
              </div>
          );
        } else {
          return <div class = "text-center errorMessage">Error: No Such Food Product Found</div>;
        }
      }
     
    }
  }
}

export default CompareFoodProduct;
