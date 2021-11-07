import React, { Component } from 'react'
import "../src/css/productStyles.css"
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
        e.preventDefault();
        console.log("Product1 value",this.state.product1);
        console.log("Product2 value",this.state.product2);
    }

    render() {

       
        return (
            <>
            <h1 className="heading" style={{textAlign:"center"}}>Compare Products</h1>
            <div className="container">

            
             <span>Product 1:</span> <input
             className="product" 
             type="text"
             name="product1"
             value={this.state.product1}
            onChange={this.handleChange}
             />
             <br/>
             <h3>V/S</h3>
             <br/>
             <span>Product 2:</span> <input 
             className="product"
             type="text"
             name="product2"
             value={this.state.product2}
            onChange={this.handleChange}
             />
             <br/>
             <br/>
             <input 
                type="button"
                className="btn btn-primary submit"
                value="Compare"
                onClick={this.handleSubmit}
             />
             
            </div>
            </>
        )
    }
}

export default Compare;
