import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import CalorieNinjaApi from "./services/CalorieNinjaApi";
import FoodProductApi from "./services/FoodProductApi";
import "./css/productStyles.css";

class FoodProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      productName: "",
      productImgUrl: "",
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
    this.getProductDetails(prodName)
    var api = "nutrition?query=" + prodName;
    CalorieNinjaApi.get(api).then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.data
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

  getProductDetails = (prodName) => {
    FoodProductApi.get(`/api/searchProductByName/${prodName}`).then(
      (result) => {
        if (result.data && result.data.data && result.data.data.products) {
          let product = result.data.data.products[0];
          this.setState({
            productName: product.food_name,
            productImgUrl: product.image_url,
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
        if (Array.isArray(items.items) && items.items.length > 0)
        {
          var product = items.items[0];
          var sugar = product.sugar_g;
          var fiber_g	= product.fiber_g;
          var serving_size_g	= product.serving_size_g;
          var sodium_mg	= product.sodium_mg;
          var name	= this.state.productName;
          var fat_saturated_g	= product.fat_saturated_g;
          var fat_total_g	= product.fat_total_g;
          var calories	= product.calories;
          var cholesterol_mg	= product.cholesterol_mg;
          var protein_g	= product.protein_g;
          var carbohydrates_total_g	= product.carbohydrates_total_g;
          return (
            <div className="contentContainer">
              <div className="productContainer">
                <h1 className="text-center">{this.state.productName}</h1>
                <div className="divider"></div>
                <div className="photoHolder">
                  <img
                    className="productImage"
                    alt="productImage"
                    src={`${this.state.productImgUrl}`}
                  />
                </div>
                <div className="statsContainer">
                  <h2 className="productText">Nutritional Statistics</h2>
                  <table className="table">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Serving Size</th>
                        <th scope="col">Calories</th>
                        <th scope="col">Total Fat</th>
                        <th scope="col">Saturated Fat</th>
                        <th scope="col">Cholosterol</th>
                        <th scope="col">Sodium</th>
                        <th scope="col">Carbohydrates</th>
                        <th scope="col">Fiber</th>
                        <th scope="col">Sugar</th>
                        <th scope="col">Protein</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-light">
                        <td>{name}</td>
                        <td>{serving_size_g}g</td>
                        <td>{calories}</td>
                        <td>{fat_total_g}g</td>
                        <td>{fat_saturated_g}g</td>
                        <td>{cholesterol_mg}mg</td>
                        <td>{sodium_mg}mg</td>
                        <td>{carbohydrates_total_g}g</td>
                        <td>{fiber_g}g</td>
                        <td>{sugar}g</td>
                        <td>{protein_g}g</td>
                      </tr>
                    </tbody>
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
