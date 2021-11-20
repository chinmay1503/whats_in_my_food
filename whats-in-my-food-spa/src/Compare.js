import React, { Component } from 'react'
import {
    NavLink,
    HashRouter,
    
} from "react-router-dom";
import "../src/css/productStyles.css"
import "./css/compareStyles.css";
import FoodProductApi from './services/FoodProductApi';
export class Compare extends Component {
    constructor(props){
        super(props);
        this.state={
            product1:"",
            product2:"",
            products:[],
            searchTerm:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
        FoodProductApi.get("/api/listAllProductNames/1").then(
            (result) => {
              this.setState({
                products:result.data.data.products
              });
            },
            (error) => {
              console.log(error);
            }
          );
    }
    handleChange(e){
        const product=e.target.name;
        this.setState({
            [product]:e.target.value
        });
    }
    isProductPresentInDb(pro) {
        this.setState({
            searchTerm:pro
        })
        console.log("Products list :",this.state.products);
        if (pro !== "" && this.state.products.length > 0) {
            let products = this.state.products.filter((product)=>product.food_name.trim().toUpperCase() === pro.trim().toUpperCase());
            return products.length > 0 ? true : false;
        }

    }
    handleSubmit(e){
            e.preventDefault();
           let flag1= this.isProductPresentInDb(this.state.product1);
           let flag2=this.isProductPresentInDb(this.state.product2);
            this.isProductPresentInDb(this.state.product2);
            if(flag1&&flag2){
                this.props.history.push(`/compareProducts/${this.state.product1}/${this.state.product2}`);
            }else if(!flag1&&!flag2){
                alert("Product1 and Product2 not found in DB search again");
            }else if(!flag1){
                alert("Product1 not found in DB search again");
            }else{
                alert("Product2 not found in DB search again");
            }
           
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
             <button className="btn btn-primary compareSubmit" value="Compare" onClick={this.handleSubmit}>Compare
             </button>
             
            </div>
            </HashRouter>
        )
    }
}

export default Compare;
