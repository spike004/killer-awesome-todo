import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  constructor() {
    super()
    this.state={}
  }
  render() {
    return (
      <Todos/>
    );
  }
}

export default App;
