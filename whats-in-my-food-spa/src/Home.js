import React, { Component } from "react";
import {
    NavLink,
    HashRouter,
    
} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.setTerm = this.setTerm.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
          searchTerm: "",
          placeholder: "Search for a Food Product...",
          navClass: "navLink"
        };
        
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
            
            if (this.state.searchTerm !== "")
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
    
    
    render(){
        return(
            <HashRouter>
                <div className = "contentContainer">
                    <div className = "main_Quote_Container">
                        <img className = "main_quote" alt="Calorie_Weightage_Img" src = "/images/main_quote.png"/>
                    </div>
                    <div className="mainContainer">
                        <h1>Search For a Food product</h1>
                        <div className = "containSearch">
                            <div className = "searchContainer">
                                <input onKeyDown={this.onKeyDown} className = "searchBox shadow" type="text" onChange={this.setTerm} placeholder= {this.state.placeholder}/>
                                <button  className = "searchButton" onClick = {this.onClick}>
                                    <NavLink id = "submit" className = {this.state.navClass} to={`/search/${this.state.searchTerm}`}><img className = "searchIcon" alt="SearchIcon" src = "/images/searchIcon.png"/></NavLink> 
                                </button>                
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Home;
