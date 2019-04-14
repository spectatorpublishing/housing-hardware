import React, { Component } from 'react';
import QandA from './components/QandA.js';
import { createGlobalStyle } from 'styled-components';
import TitlePage from './components/TitlePage.js'
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
`

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <TitlePage title = "HOME AWAY FROM HOME"/>
        <QandA question = "How many chucks could a woodchuck chuck" answer = "42"></QandA>
      </div>
    );
  }
}

export default App;
