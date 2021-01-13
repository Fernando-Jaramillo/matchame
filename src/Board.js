import React, {useState} from 'react';
import './Board.css';
import Card from './Card.js';
import {misses} from './App.js'
import {Howl, Howler} from 'howler';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
  const audioClips = {sound2: 'buttons.mp3'}


export default function Board(props) {
    const [count, setCount]= useState(5);
    const soundPlay = (src) => {
        const sound2 = new Howl ({
          src,
          html5: true
        })
        sound2.play()
      }
    return (
        <div className="background">
            <div className="gameboard">
                <div className="scorebox position">
                <p>Chances: {5 - misses.length} </p> 
                </div>
                <div className="cardarea">
                    <div className="row1">
                        {/* <Card status={props.statuses[0]} face={props.faces[0]} clicker={() => props.flipCard(0)} />  
                        <Card status={props.statuses[1]} face={props.faces[1]} clicker={() => props.flipCard(1)} />
                        <Card status={props.statuses[2]} face={props.faces[2]} clicker={() => props.flipCard(2)} />
                        <Card status={props.statuses[3]} face={props.faces[3]} clicker={() => props.flipCard(3)} />
                        <Card status={props.statuses[4]} face={props.faces[4]} clicker={() => props.flipCard(4)} />
                    </div >
                    <div className="row2">
                        <Card status={props.statuses[5]} face={props.faces[5]} clicker={() => props.flipCard(5)} />
                        <Card status={props.statuses[6]} face={props.faces[6]} clicker={() => props.flipCard(6)} />
                        <Card status={props.statuses[7]} face={props.faces[7]} clicker={() => props.flipCard(7)} />
                        <Card status={props.statuses[8]} face={props.faces[8]} clicker={() => props.flipCard(8)} />
                        <Card status={props.statuses[9]} face={props.faces[9]} clicker={() => props.flipCard(9)} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
