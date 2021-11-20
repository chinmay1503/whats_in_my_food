import React, { Component } from "react";
import {
    NavLink,
    HashRouter,
    
} from "react-router-dom";
import FoodProductApi from "./services/FoodProductApi";
import ToastNotification from "./services/ToastNotification";
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.setTerm = this.setTerm.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
          searchTerm: "",
          placeholder: "Search for a Food Product...",
          navClass: "navLink",
          products:[]
        };
        
      }
      componentDidMount() {
        FoodProductApi.get("/api/listAllProductNames/1").then(
            (result) => {
              this.setState({
                isLoaded: true,
                products:result.data.data.products
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

    isProductPresentInDb() {
        let isValid = false;
        if (this.state.searchTerm !== "" && this.state.products.length > 0) {
            let products = this.state.products.filter((product)=>product.food_name.trim().toUpperCase() === this.state.searchTerm.trim().toUpperCase());
            return products.length > 0 ? true : false;
        }
        return isValid;
    }
      
    setTerm(event) {
        if (event.target.value !== "")
        {
            this.setState({navClass: "navLinkActive"});
        }
        else
        {
            this.setState({navClass: "navLink"});
        }
        this.setState({ searchTerm: event.target.value });
        event.preventDefault();
    }

    onKeyDown(event) 
    {
        if (event.key === 'Enter') 
        {
            if(!this.isProductPresentInDb()) {
                ToastNotification.showErrorMessage("bottom-center", "Product Not present in Database, Please search for a different Product");
            }
            else if (this.state.searchTerm !== "")
            {
                document.getElementById("submit").click();
            }
            else
            {
                this.setState({placeholder: "Please enter a valid Food Product"});
            }
            
            event.stopPropagation();
            event.preventDefault();
        }
    }

    onClick(event) 
    {
        if (this.state.searchTerm === "")
        {
            this.setState({placeholder: "Please enter a valid Food Product"});
        }
    }
    
    
    render() {
        return(
            <HashRouter>
            <ToastContainer/>
                <div className = "homeContainer">
                    <div className = "main_Quote_Container">
                        <div className="imageDiv"><img className = "main_quote" alt="Calorie_Weightage_Img" src = "/images/main_quote.png"/></div>
                        <div className="mainContainer">
                        <h1>Search For a Food product</h1>
                        <div className = "containSearch">
                            <div className = "searchContainer">
                                <input onKeyDown={this.onKeyDown} className = "searchBox shadow" type="text" onChange={this.setTerm} placeholder= {this.state.placeholder}/>
                                <button  id = "submit" className = "searchButton" onClick = {this.onClick}>
                                    <NavLink className = {this.state.navClass} to={`/product/${this.state.searchTerm}`}><img className = "searchIcon" alt="SearchIcon" src = "/images/searchIcon.png"/></NavLink> 
                                </button>                
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Home;
