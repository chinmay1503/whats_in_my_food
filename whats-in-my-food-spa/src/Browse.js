import React, { Component } from "react";
import { Animated, Easing } from 'react-native';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import FoodProductApi from "./services/FoodProductApi";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      spinAnim: new Animated.Value(0),
      filterMessage: "Sort Z-A",
      imageSource: "./images/sortIcon.jpg"
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.spinAnim, {
        toValue: 100,
        duration: 300000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    FoodProductApi.get("/api/listAllProductNames/1").then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.data,
        });
      },
      (error) => {
        console.log(error)
        this.setState({
          isLoaded: true,
          error: error,
        });
      }
    );
    
  }

  reverseList = (event) => {
    var productList = this.state.items.data.products;
    if (this.state.filterMessage === "Sort A-Z")
    {
      this.setState({
        imageSource: "./images/sortIcon.jpg",
        filterMessage: "Sort Z-A"
      });
    }
    else
    {
      this.setState({
        imageSource: "./images/sortIconUp.png",
        filterMessage: "Sort A-Z"
      });
    }
    productList.reverse();
    this.setState({
      items: {
        data: {
          products: productList,
        },
      },
    });
    event.preventDefault();
  };

  render() {
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    const carrotStyle = {
      transform: [{ rotate: spin }],
      position: "absolute",
      top: "5vw",
      left: "5vw",
      right: "5vw",
      bottom: "5vw",
      height: "10vw",
      width: "10vw",
    };
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div class="text-center errorMessage">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <div className="loadingContainer">
            <img
              className="plate"
              src="../images/loadingIcon.png"
              alt="background"
            />
            <Animated.Image
              style={carrotStyle}
              source="../images/ingredientIcon3.png"
              alt="carrot"
            />
          </div>
          <h1 className="text-center loadingText">Gathering Nutrients.....</h1>
        </div>
      );
    } else {
      return(
          <HashRouter>
            <div className="contentContainer">
              <div className="browseWidgetContainer">
                  <button className="text-center flipList" onClick={this.reverseList}>
                    <img className = "sortImage" src = {this.state.imageSource} alt = "sort"/>
                    {this.state.filterMessage}
                  </button>
              </div>
              <div className="product-List">
                <div>
                  <h1 className="browseHeaderText"> Browse All Food Products </h1>
                  <div className = "mainSearchContainer">

                    {Object.entries(this.state.items.data.products).map((item) => {
                      return (
                        <NavLink to={`/product/${item[1].food_name}`} className = "shadow productBox">
                          <div className = "productImageHolder">
                            <img className = "productSearchImage" alt = "food_product" src = {item[1].image_url}/>
                          </div>
                          <div className = "productSearchText">{item[1].food_name}</div>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </HashRouter>
        );
    }
  }
}

export default Browse;
