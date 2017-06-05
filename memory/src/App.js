import React, { Component } from 'react';
import Square from "./square.js";
import Footer from "./footer.js";

class App extends Component {

  state = {
    gameState:"start",
    board:["blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank"],
    answers:[],
    guesses:[]
  }

  startGame = ()=>{
    this.setState({
      gameState:"prep"
    });
  }

  memorize = ()=>{
    let w = Math.floor(Math.random()*12);
    let x = Math.floor(Math.random()*12);
    let y = Math.floor(Math.random()*12);
    let z = Math.floor(Math.random()*12);
    while(w===x) {
      x = Math.floor(Math.random()*12);
    }
    while(w===y || x===y) {
      y = Math.floor(Math.random()*12);
    }
    while(w===z || x===z || y===z) {
      z = Math.floor(Math.random()*12);
    }
    let ans = [w,x,y,z];
    let temp = this.state.board.slice();
    temp[w] = "show";
    temp[x] = "show";
    temp[y] = "show";
    temp[z] = "show";
    this.setState({
      gameState:"memorize",
      board:temp,
      answers:ans
    });
    setTimeout(()=>{
      this.setState({
        gameState:"guess",
        board:["blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank"]
      });
    },5000);
  }

  addAns = (idx)=>{
    let temp = this.state.guesses.slice();
    temp.push(idx);
    this.setState({
      guesses:temp
    });
    setTimeout(()=>{
      console.log(this.state.guesses);
    },0);
  }

  removeAns = (idx)=>{
    let temp = this.state.guesses.slice();
    let remIdx = temp.indexOf(idx);
    for(let i = remIdx; i < temp.length-1; i++) {
      temp[i] = temp[i+1];
    }
    temp.length -= 1;
    this.setState({
      guesses:temp
    });
    setTimeout(()=>{
      console.log(this.state.guesses);
    },0);
  }

  render() {
    let divStyle = {textAlign:"center",border:"thin solid black"};
    return (
      <div className="App" style={divStyle}>
        <h1>Memory Game</h1>
        <div>
          <Square status={this.state.board[0]} idx={0} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[1]} idx={1} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[2]} idx={2} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[3]} idx={3} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <br />
          <Square status={this.state.board[4]} idx={4} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[5]} idx={5} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[6]} idx={6} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[7]} idx={7} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <br />
          <Square status={this.state.board[8]} idx={8} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[9]} idx={9} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[10]} idx={10} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[11]} idx={11} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
        </div>
        <Footer gameState={this.state.gameState} startGame={this.startGame} memorize={this.memorize} />
      </div>
    );
  }
}

export default App;
