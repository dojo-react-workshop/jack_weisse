import React, { Component } from 'react';
import './../node_modules/todomvc-app-css/index.css';
import TodoItem from "./addItem";
import Filters from "./filters";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:[{text:"start",checked:false}],
      numActive:1,
      filter: "all"
    }
  }

  addNewTodo = (e)=>{
    if(e.target.value === "") {
      return; // don't add blank item to list
    }
    if(e.keyCode === 13) {
      let tempArr = this.state.todos.slice();
      tempArr.push({text:e.target.value,checked:false});
      e.target.value = "";
      this.setState({
        todos:tempArr,
        numActive:++this.state.numActive
      });
    }
  }

  remove = (idx)=>{
    let temp = this.state.todos.slice();
    for(let i = idx; i < temp.length; i++) {
      temp[i] = temp[i+1];
    }
    temp.length -= 1;
    this.setState({
      todos: temp,
      numActive: --this.state.numActive
    });
  }

  toggleComplete = (idx)=>{
    let temp = this.state.todos.slice();
    let numA = this.state.numActive;
    if(temp[idx].checked) {
      numA++;
    } else {
      numA--;
    }
    temp[idx].checked = !temp[idx].checked;
    this.setState({
      todos: temp,
      numActive: numA
    })
  }

  setFilter = (val)=>{
    console.log(val);
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={this.addNewTodo} />
          </header>
          <section className="main">
            <ul className="todo-list">
              {this.state.todos.map((el,idx)=>{
                let key = idx+el.text;
                return (<TodoItem text={el.text} key={key} idx={idx} complete={el.checked} remove={this.remove} toggle={this.toggleComplete} />);
              })}
            </ul>
          </section>
          <Filters numTodos={this.state.todos.length} numActive={this.state.numActive} setFilter={this.setFilter} />
        </section>
      </div>
    );
  }
}

export default App;
