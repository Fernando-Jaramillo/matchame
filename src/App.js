import React, {useState} from 'react';
import './App.css';
import './Card.css'
import Home from './Home.js';
import Board from './Board.js';
import GameOver from './GameOver.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Howl, Howler} from 'howler';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const c1 = './1.jpg';
const c2 = "./2.jpg";
const c3 = "./3.jpg";
const c4 = "./4.jpg";
const c5 = "./5.jpg";

const audioClips = {sound: 'flsound.mp3', sound3: 'didit.mp3', sound4: 'dead.mp3'}
let cardsFlipped = [];
export let misses = [];



class App extends React.Component {
  constructor(props){
    super(props)
    let cards = [];
    var c = [c1, c2, c3, c4, c5, c1, c2, c3, c4, c5];
    for(let i = 0; i < 10; i++){
      var ind = Math.floor(Math.random()*(c.length));
      var random = c.splice(ind,1);
      cards = cards.concat(random);
    }
    this.initialState = {
        statuses: ["down", "down", "down", "down", "down", "down", "down", "down", "down", "down"],
        faces: cards,
    }
    this.state = this.initialState
  }
  
  resetState = () => {
    this.setState({statuses: this.initialState.statuses, face: this.initialState.faces})
  }
  
  soundPlay = (src) => {
    const sound = new Howl ({
      src,
      html5: true
    })
    sound.play()
  }

  flipCheck(index){
    this.flipCard(index)
    this.checkForMatches()
    if (misses.length === 5){
      this.soundPlay(audioClips.sound4)
      window.location = './Game_Over';
    }
  }

  flipCard(index){
    let statuses = this.state.statuses.slice();
    if (statuses[index] === 'up'){
        statuses[index] = 'down'
    }else{
        statuses[index] = 'up'
    }
    this.setState({statuses: statuses})
    this.soundPlay(audioClips.sound)
    cardsFlipped.push(index)
  }

  flipBack(index){
    let statuses = this.state.statuses.slice();
    if (statuses[index] === 'up'){
        statuses[index] = 'down'
    }else{
        statuses[index] = 'up'
    }
    this.setState({statuses: statuses})
    this.soundPlay(audioClips.sound)

  }

  checkForMatches(){
    
    if (cardsFlipped.length == 2){
      if (this.state.faces[cardsFlipped[0]] == this.state.faces[cardsFlipped[1]]) { 
        let index1 = cardsFlipped[0]
        let index2 = cardsFlipped[1]
        document.getElementsByClassName("sizecards")[index1].classList.add("card--move")
        document.getElementsByClassName("sizecards")[index2].classList.add("card--move")
        this.soundPlay(audioClips.sound3)
      } else {
        let [card1, card2] = cardsFlipped
        setTimeout(() => this.flipBack(card1), 1000);
        setTimeout(() => this.flipBack(card2), 1000);
        misses.push(1)


      }
      cardsFlipped.pop()
      cardsFlipped.pop()
    }
  }


// time to take to make the function
// setTimeout(() => this.flipCard(index), 3000);

  render(){ 
      return (
        <>
        <div>
          <Router >
        <div>
        <Switch>
          <Route path='/card'>

          <Board faces = {this.state.faces} statuses = {this.state.statuses} flipCard={(i) => this.flipCheck(i)}/>
          </Route>

          <Route path='/Game_Over'>
            <GameOver/>
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
          </div>
          
        
        </>
      )
  }
}
export default App;
