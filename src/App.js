import React, { Component, useEffect, useState } from "react";
import Recipe from "./Recipe";
import Main from './components/MainComponent';
import "./App.css";

class App extends Component {
  render(){
    return(
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
