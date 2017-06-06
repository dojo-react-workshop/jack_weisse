import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import axios from "axios";

class App extends Component {

  state = {
    value:""
  }

  getData = (userSearch)=>{
    let data = null;
    axios.get(`https://api.github.com/search/users?q=${userSearch}`)
      .then((response)=>{
        let {repos_url} = response.data.items[0];
        data = response;
        console.log(data);
      })
      .catch((error)=>{
        console.log(error);
      });
      return data;
  }

  textUpdate = (e)=>{
    this.setState({
      value:e.target.value
    })
  }

  submitSearch = (e)=>{
    e.preventDefault();
    console.log(e.target);
    this.setState({
      value:""
    })
  }

  render() {
    // this.getData();
    return (
      <Router>
        <div>
          <h1 style={{textAlign:"center"}}>Github Data</h1>
          <form style={{textAlign:"center"}} onSubmit={this.submitSearch}>
            <input type="text" value={this.state.value} onChange={this.textUpdate} />
            <input type="submit" value="Search" />
          </form>
          <Route path="/results" render={()=>{
            return (<h2 style={{textAlign:"center"}}>Results</h2>);
          }} />
        </div>
      </Router>
    );
  }
}

export default App;