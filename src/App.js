import React, {Component} from "react";
import LogIn from "./Login.js"
import {BrowserRouter, Route} from "react-router-dom"
import Dashboard from "./Dashboard.js"




class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Route exact path ="/" component={LogIn}/>
      <Route path="/dashboard" component={Dashboard}/>
      </BrowserRouter>
    )
  }
} 
export default App