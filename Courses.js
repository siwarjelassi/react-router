import React from "react";
import Home  from "./Home"; 

import { BrowserRouter, Link, Route } from "react-router-dom";


const Courses = ()=>{
    return (<div>
      <h1>Courses</h1>
      <Link to="/">Go back to home</Link>
    </div>)
  }
  export default Courses ;