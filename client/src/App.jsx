import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    name: 'client'
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name} 2</h1>
      </div>
    );
  }
}
