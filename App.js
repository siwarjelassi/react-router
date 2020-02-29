import React from 'react';
import Home from './Home'; 
import Courses from'./Courses';
import { BrowserRouter, Route, Link } from "react-router-dom"; 


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Courses" component={Courses}/>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}



