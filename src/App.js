import React from 'react';
import './App.css';
import Card from './Card.js';
import Board from './Board.js';
const c1 = './1.jpg';
const c2 = "./2.jpg";
const c3 = "./3.jpg";
const c4 = "./4.jpg";
const c5 = "./5.jpg";

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

flipCard(index){
  let statuses = this.state.statuses.slice()
  if (statuses[index] === 'up'){
      statuses[index] = 'down'
  }else{
      statuses[index] = 'up'
      setTimeout(() => this.flipCard(index), 3000);
  }
  this.setState({statuses: statuses})

}


  render(){
      return (
        <Board faces = {this.state.faces} statuses = {this.state.statuses} flipCard={(i) => this.flipCard(i)}/>
      )
  }
}
export default App;
