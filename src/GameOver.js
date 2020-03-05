import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


export default function GameOver() {

    return(
        <div className="">
            <Link to='/card' type="button" class="btn btn-outline-light bn btn-size">TRY AGAIN</Link>
        </div>
    )
}
