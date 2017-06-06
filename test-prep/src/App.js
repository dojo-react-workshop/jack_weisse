import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import axios from "axios";
import SearchForm from "./searchForm";
import RepoRoute from "./repoRoute";

class App extends Component {

  state = {
    value:"",
    searchResults:[]
  }

  getUserData = (userSearch)=>{
    axios.get(`https://api.github.com/search/users?q=${userSearch}`)
      .then((response)=>{
        let temp = [];
        response.data.items.forEach((el)=>{
          temp.push({user:el.login,[el.login]:el.repos_url});
          this.setState({
            searchResults:temp
          });
        });
      })
      .catch((error)=>{
        console.err(error);
      });
  }

  render() {
    return (
      <Router>
        <div>
          <h1 style={{textAlign:"center"}}>Github Data</h1>
          <SearchForm getData={this.getUserData}/>
          {this.state.searchResults.map((el,idx)=>{
              return (<Link key={idx} to={{pathname:`/${el.user}`,idx:idx}} style={{textAlign:"center",display:"block"}}>{el.user}</Link>);
            })
          }
          <hr />
          <Route path="/:user" render={(props)=>{
            let {location:{idx},match:{params:{user}}} = props;
            let url = "";
            if(this.state.searchResults.length > 0) {
              url = this.state.searchResults[idx][user];
            }
            return (<RepoRoute {...props} idx={idx} user={user} url={url} />);
          }
        } />
        </div>
      </Router>
    );
  }
}

export default App;