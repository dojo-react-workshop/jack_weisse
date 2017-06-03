import React, { Component } from 'react';
import './../node_modules/todomvc-app-css/index.css';
import TodoItem from "./addItem";
import Filters from "./filters";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:[], // todo = {text: "Todo Name", checked: false}
      numActive:0,
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
    this.setState({
      filter: val
    });
  }

  clear = ()=>{
    let temp = [];
    for(let i = 0; i < this.state.todos.length; i++) {
      if(!this.state.todos[i].checked) {
        temp.push(this.state.todos[i]);
      }
    }

    this.setState({
      todos: temp
    });

  }

  update = (str,idx)=>{
    let temp = this.state.todos.slice();
    temp[idx].text = str;
    this.setState({
      todos:temp
    });
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
                if(this.state.filter === "all") {
                  return (<TodoItem text={el.text} key={key} idx={idx} complete={el.checked} remove={this.remove} toggle={this.toggleComplete} update={this.update} />);
                } else if(this.state.filter === "active") {
                  if(!el.checked) {
                    return (<TodoItem text={el.text} key={key} idx={idx} complete={el.checked} remove={this.remove} toggle={this.toggleComplete} update={this.update} />);
                  }
                } else if(this.state.filter === "complete") {
                  if(el.checked) {
                    return (<TodoItem text={el.text} key={key} idx={idx} complete={el.checked} remove={this.remove} toggle={this.toggleComplete} update={this.update} />);
                  }
                }
                return undefined;
              })}
            </ul>
          </section>
          <Filters numTodos={this.state.todos.length} numActive={this.state.numActive} filter={this.state.filter} setFilter={this.setFilter} clear={this.clear} />
        </section>
      </div>
    );
  }
}

export default App;
