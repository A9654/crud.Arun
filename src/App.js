import React from "react";

import './App.css';
import About from "./components/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/Home"; 
import Navbar from "./components/pages/layout/navbar";
import"../node_modules/bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import AddUser from "./components/users/AddUser";
function App() {
  return (
   <Router>
      <div className="App">
      <Navbar/>
      <Switch> 
        <Route exact path ="/" component ={Home} />
        <Route exact path = "/about" component ={About} />
        <Route exact path ="/contact"component ={Contact}/>
      <Route exact path ="/users/add" component={AddUser}/>
      </Switch>

      
      
    </div>
   </Router>
  );
}

export default App;
