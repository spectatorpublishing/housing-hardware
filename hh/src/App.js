import React, { Component } from 'react';
import QandA from './components/QandA.js';
import Pic from './components/Pic.js';

class App extends Component {
  render() {
    return (
      <div>>
        <Pic img = "Bezos.jpg"></Pic>
        <QandA question = "How many chucks could a woodchuck chuck" answer = "42"></QandA>
      </div>
    );
  }
}

export default App;
