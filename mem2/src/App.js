import React, { Component } from 'react';
import Square from "./square.js";
import Footer from "./footer.js";

class App extends Component {

  state = {
    gameState:"start",
    board:[{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false}],
    answers:[],
    guesses:[]
  }

  startGame = ()=>{
    this.setState({
      gameState:"prep",
      board:[{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false}],
      answers:[],
      guesses:[]
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
    temp[w].status = "show";
    temp[x].status = "show";
    temp[y].status = "show";
    temp[z].status = "show";
    this.setState({
      gameState:"memorize",
      board:temp,
      answers:ans
    });
    setTimeout(()=>{
      this.setState({
        gameState:"guess",
        board:[{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false},{status:"blank",selected:false}]
      });
    },2000);
  }

  addAns = (idx)=>{
    let temp = this.state.guesses.slice();
    temp.push(idx);
    let tempBoard = this.state.board.slice();
    tempBoard[idx].selected = true;
    this.setState({
      guesses:temp,
      board:tempBoard
    });
  }

  removeAns = (idx)=>{
    let temp = this.state.guesses.slice();
    let remIdx = temp.indexOf(idx);
    for(let i = remIdx; i < temp.length-1; i++) {
      temp[i] = temp[i+1];
    }
    temp.length -= 1;
    let tempBoard = this.state.board.slice();
    tempBoard[idx].selected = false;
    this.setState({
      guesses:temp,
      board:tempBoard[idx].selected = false
    });
  }

  validate = ()=>{
    let temp = this.state.board.slice();
    for(let i = 0; i < temp.length; i++) {
      let ansCheck = this.state.answers.indexOf(i);
      let guessCheck = this.state.guesses.indexOf(i);
      if(ansCheck > -1 && guessCheck > -1) {
        temp[i].status = "correct";
      } else if(guessCheck > -1) {
        temp[i].status = "wrong";
      } else if(ansCheck > -1) {
        temp[i].status = "show";
      }
    }
    this.setState({
      board:temp,
      gameState:"results"
    });
    setTimeout(()=>{
      console.log(this.state.board);
    },0)
  }

  render() {
    let divStyle = {textAlign:"center",border:"thin solid black"};
    console.log(this.state.board[0].status);
    return (
      <div className="App" style={divStyle}>
        <h1>Memory Game</h1>
        <div>
          <Square status={this.state.board[0].status} selected={this.state.board[0].selected} idx={0} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[1].status} selected={this.state.board[1].selected} idx={1} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[2].status} selected={this.state.board[2].selected}idx={2} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[3].status} selected={this.state.board[3].selected} idx={3} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <br />
          <Square status={this.state.board[4].status} selected={this.state.board[4].selected} idx={4} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[5].status} selected={this.state.board[5].selected} idx={5} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[6].status} selected={this.state.board[6].selected} idx={6} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[7].status} selected={this.state.board[7].selected} idx={7} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <br />
          <Square status={this.state.board[8].status} selected={this.state.board[8].selected} idx={8} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[9].status} selected={this.state.board[9].selected} idx={9} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[10].status} selected={this.state.board[10].selected} idx={10} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
          <Square status={this.state.board[11].status} selected={this.state.board[11].selected} idx={11} gameState={this.state.gameState} add={this.addAns} remove={this.removeAns} />
        </div>
        <Footer gameState={this.state.gameState} startGame={this.startGame} memorize={this.memorize} validate={this.validate}/>
      </div>
    );
  }
}

export default App;
