import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import { Animated, Easing } from 'react-native';
import FoodProductApi from "./services/FoodProductApi";
import "./css/productStyles.css";

class FoodProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
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
    var prodName = this.props.match.params.productName;
    var api = "nutrition?query=" + prodName;
    FoodProductApi.get(api).then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.data,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
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
        if (Array.isArray(items.items) && items.items.length > 0)
        {
          var product = items.items[0];
          var sugar = product.sugar_g;
          var fiber_g	= product.fiber_g;
          var serving_size_g	= product.serving_size_g;
          var sodium_mg	= product.sodium_mg;
          var name	= product.name;
          var potassium_mg	= product.potassium_mg;
          var fat_saturated_g	= product.fat_saturated_g;
          var fat_total_g	= product.fat_total_g;
          var calories	= product.calories;
          var cholesterol_mg	= product.cholesterol_mg;
          var protein_g	= product.protein_g;
          var carbohydrates_total_g	= product.carbohydrates_total_g;
          return (
              <div className = "contentContainer">
                <div className = "recipeContainer">
                  <h1 className = "text-center">{product.name}</h1>
                  <div className = "divider"></div>
                  <div className = "photoHolder">
                    <img className = "recipeImage" alt="productImage" src = {`${product.thumbnail}`}/>
                  </div>
                  <div className = "stepsContainer">
                    <h2 className = "recipeText">Nutritional Statistics</h2>
                    <ul>
                      <li>Sugar :{`${sugar}`}</li>
                      <li> Fiber :{`${fiber_g}`}</li>
                      <li> Fat_Saturated :{`${fat_saturated_g}`}</li>
                      <li> Fat_Total :{`${fat_total_g}`}</li>
                      <li> Calories :{`${calories}`}</li>
                    </ul>
                    <table>
                    <tr><th>Name</th></tr>
                    </table>
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

export default FoodProduct;
