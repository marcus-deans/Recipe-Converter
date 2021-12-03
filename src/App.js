import React, { Component, useEffect, useState } from "react";
import Recipe from "./components/RecipeComponent";
import Main from './components/MainComponent';
import "./App.css";

class App extends Component {
  render(){
    return(
      <div className = "App">
        <Main />
      </div>
    );
  }
}

export default App;
