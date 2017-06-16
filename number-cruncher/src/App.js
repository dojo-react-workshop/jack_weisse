import React, { Component } from 'react';
import Results from "./results";
import AddNumber from "./addNumber";
import MathFunction from "./mathFunctions";

class App extends Component {
  state = {
  }

  addNumber = (newNumber)=>{
    const max = MathFunction.setMax(newNumber,this.state.max);

    const min = MathFunction.setMin(newNumber,this.state.min);

    const mean = MathFunction.setMean(newNumber,this.state.mean,this.state.numberCount);
    let numberCount = 1;
    if(this.state.numberCount !== undefined) {
      numberCount = this.state.numberCount+1;
    }

    const modeStore = Object.assign({},this.state.mode);
    let mode = newNumber;
    if(modeStore[newNumber]===undefined) {
      modeStore[newNumber] = 1;
    }
    let modeCount = 0;
    if(this.state.modeCount !== undefined) {
      modeCount = modeStore[newNumber];
    } else if(modeStore[newNumber] > modeCount) {
      modeCount = modeStore[newNumber];
      mode = newNumber;
    }

    this.setState({
      max,
      min,
      mean,
      numberCount,
      mode,
      modeStore,
      modeCount
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Number Cruncher</h1>
        <AddNumber submitNumber={this.addNumber} />
        <Results values={this.state} />
      </div>
    );
  }
}

export default App;