import React from "react";
import Courses from './Courses'; 
import { BrowserRouter, Link, Route } from "react-router-dom";

const Home = ()=>{
  return (<div>
    <h1>Contact</h1>
    <Link to="/Contact">Contact</Link>
  </div>)
}
export default Home 