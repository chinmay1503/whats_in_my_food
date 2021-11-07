import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import FoodProduct from "./FoodProduct";
import Compare from "./Compare";
 
class Main extends Component {
    constructor(props) {
        super(props);
        this.handleNav = this.handleNav.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.state = {
            backgroundClass: "background",
            worldClass: "worldButton",
            compareClass: "compareButton",
            browseClass: "browseButton",
            homeClass: "homeButton",
            burgerLine1: "line1",
            burgerLine2: "line2",
            burgerLine3: "line3"
        };
        }

    handleNav() {
        if (this.state.backgroundClass === "background")
        {
            this.setState ({
                backgroundClass: "backgroundActive",
                worldClass: "worldButtonActive",
                compareClass: "compareButtonActive",
                browseClass: "browseButtonActive",
                homeClass: "homeButtonActive",
                burgerLine1: "line1Active",
                burgerLine2: "line2Active",
                burgerLine3: "line3Active"
            });
        }
        else
        {
            this.setState ({
                backgroundClass: "background",
                worldClass: "worldButton",
                compareClass: "compareButton",
                browseClass: "browseButton",
                homeClass: "homeButton",
                burgerLine1: "line1",
                burgerLine2: "line2",
                burgerLine3: "line3"
            });
        }

    }

    handleNavClick() {
        if (this.state.backgroundClass === "backgroundActive")
        {
            this.setState ({
                backgroundClass: "background",
                worldClass: "worldButton",
                compareClass: "compareButton",
                browseClass: "browseButton",
                homeClass: "homeButton",
                burgerLine1: "line1",
                burgerLine2: "line2",
                burgerLine3: "line3"
            });
        }
    }

    render() {
    return (
        <HashRouter>
        <nav className = "nav">
            <div className={this.state.backgroundClass}></div>
            <NavLink exact to="/"><img className = "logo" src = "/images/logo.png" alt="logoImg"/></NavLink>
            <div className = "linkContainer">
                <ul className="header">
                    <li className = {this.state.worldClass}><NavLink onClick = {this.handleNavClick} to= "/calorie_world">Calorie World</NavLink></li>
                    <li className = {this.state.compareClass}><NavLink onClick = {this.handleNavClick} to= "/compare">Compare Products</NavLink></li>
                    <li className = {this.state.browseClass}><NavLink onClick = {this.handleNavClick} to= "/browse">Browse Products</NavLink></li>
                    <li className = {this.state.homeClass} ><NavLink  onClick = {this.handleNavClick} exact to= "/">Home</NavLink></li>
                </ul> 
            </div>
            <button className="burger" onClick = {this.handleNav}>
                <div className={this.state.burgerLine1}></div>
                <div className={this.state.burgerLine2}></div>
                <div className={this.state.burgerLine3}></div>
            </button>
        </nav>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/product/:productName" component={FoodProduct}/>
            <Route path="/compare" component={Compare}/>
        </div>
        </HashRouter>
    );
    }
}

export default Main;