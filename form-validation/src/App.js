import React, { Component } from 'react';
import LoginForm from "./loginForm.js";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Validated Form</h1>
        <LoginForm />
      </div>
    );
  }
}

export default App;
