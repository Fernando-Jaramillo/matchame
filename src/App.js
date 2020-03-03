import React from 'react';
import './App.css';
import Card from './Card.js';
const c1 = './c1.png';
const c2 = "./c2.png";
const c3 = "./c3.png";
const c4 = "./c4.jpg";
const c5 = "./c5.png";

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
  }
  this.setState({statuses: statuses})
}

  render(){
      return (
          <div>
              <Card status={this.state.statuses[0]} face={this.state.faces[0]} clicker={() => this.flipCard(0)} />
              <Card status={this.state.statuses[1]} face={this.state.faces[1]} clicker={() => this.flipCard(1)} />
              <Card status={this.state.statuses[2]} face={this.state.faces[2]} clicker={() => this.flipCard(2)} />
              <Card status={this.state.statuses[3]} face={this.state.faces[3]} clicker={() => this.flipCard(3)} />
              <Card status={this.state.statuses[4]} face={this.state.faces[4]} clicker={() => this.flipCard(4)} />
              <Card status={this.state.statuses[5]} face={this.state.faces[5]} clicker={() => this.flipCard(5)} />
              <Card status={this.state.statuses[6]} face={this.state.faces[6]} clicker={() => this.flipCard(6)} />
              <Card status={this.state.statuses[7]} face={this.state.faces[7]} clicker={() => this.flipCard(7)} />
              <Card status={this.state.statuses[8]} face={this.state.faces[8]} clicker={() => this.flipCard(8)} />
              <Card status={this.state.statuses[9]} face={this.state.faces[9]} clicker={() => this.flipCard(9)} />
          </div>
      )
  }
}
export default App;


// jus an intsnace AAAAAAAAAA
