import React, { Component } from 'react';
import QandA from './components/QandA.js';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway');

body{
	margin: 0;
    padding: 0;
    font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

class App extends Component {
  render() {
    return (
      <div>
        <QandA question = "Hello?" answer = "Hello!"></QandA>
      </div>
    );
  }
}

export default App;
