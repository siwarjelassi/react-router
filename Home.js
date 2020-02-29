import React from "react";
import Courses from './Courses'; 
import { BrowserRouter, Link, Route } from "react-router-dom";

const Home = ()=>{
  return (<div>
    <h1>Home page</h1>
    <Link to="/Courses">Courses</Link>
  </div>)
}
export default Home 