import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Productdetails from './components/Productdetails';
import './index.css';
import * as productActions from "./actions/addToCart";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

class App extends Component {
   componentWillMount(){
    console.log("test");
    this.props.actions.getProduct();
  }
  render() {
    return (
      <div className="container">
       <Dashboard/>
       <Route path="/cartItems" component={Home}/>
        {/*<Home/>*/}
        <Productdetails/>
      </div>
      
    );
  }
}

function mapStateToProps(state){
  return{
    products:state.products,
    addProduct:state.addProduct
  };
}
function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(productActions,dispatch)
  };
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
