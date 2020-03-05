import React from 'react';
import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function Home(){
    return(
    <div className="bg-home button">
        <Link to='/card' class="btn btn-outline-light size">PLAY</Link>
    </div>
    )
}