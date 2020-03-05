import React from 'react';
import './App.css';
import Card from './Card.js';
import Home from './Home.js';
import Board from './Board.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const c1 = './1.jpg';
const c2 = "./2.jpg";
const c3 = "./3.jpg";
const c4 = "./4.jpg";
const c5 = "./5.jpg";
let cardsFlipped = [];


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
  
  flipCheck(index){
    this.flipCard(index)
    this.checkForMatches()
    console.log(cardsFlipped)
  }
  flipCard(index){
    let statuses = this.state.statuses.slice();
    if (statuses[index] === 'up'){
        statuses[index] = 'down'
    }else{
        statuses[index] = 'up'
    }
    this.setState({statuses: statuses})
    cardsFlipped.push(index)
  }

  flipCard2(index){
    let statuses = this.state.statuses.slice();
    if (statuses[index] === 'up'){
        statuses[index] = 'down'
    }else{
        statuses[index] = 'up'
    }
    this.setState({statuses: statuses})
  }

  checkForMatches(){
    if (cardsFlipped.length == 2){
      if (this.state.faces[cardsFlipped[0]] == this.state.faces[cardsFlipped[1]]) { 
      } else {
        let [card1, card2] = cardsFlipped
        setTimeout(() => this.flipCard2(card1), 1000);
        setTimeout(() => this.flipCard2(card2), 1000);
      }
      cardsFlipped.pop()
      cardsFlipped.pop()
    }
  }

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

