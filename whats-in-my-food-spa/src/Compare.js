import React, { Component } from 'react'
import {
    NavLink,
    HashRouter,
    
} from "react-router-dom";
import "../src/css/productStyles.css"
import "./css/compareStyles.css";
export class Compare extends Component {
    constructor(props){
        super(props);
        this.state={
            product1:"",
            product2:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        const product=e.target.name;
        this.setState({
            [product]:e.target.value
        });
    }
    handleSubmit(e){
        console.log("Product1 value",this.state.product1);
        console.log("Product2 value",this.state.product2);
    }

    render() {

       
        return (
            <HashRouter>
            <h1 className="heading" style={{textAlign:"center"}}>Compare Products</h1>
            <div className="compareContainer">

            
             <span className="compareproductText">Product 1:</span> <input
             className="productInput" 
             type="text"
             name="product1"
             value={this.state.product1}
            onChange={this.handleChange}
             />
             <h3 className="versus">V/S</h3>
             <span className="compareproductText">Product 2:</span> <input 
             className="productInput"
             type="text"
             name="product2"
             value={this.state.product2}
            onChange={this.handleChange}
             />
             <button className="btn btn-primary compareSubmit" value="Compare" onClick={this.handleSubmit}>
                <NavLink className="compareLink" to={`/compareProducts/${this.state.product1}/${this.state.product2}`}>Compare</NavLink>
            </button>
             
            </div>
            </HashRouter>
        )
    }
}

export default Compare;
