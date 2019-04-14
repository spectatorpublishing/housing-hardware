import React, { Component } from 'react';
import styled from 'styled-components';


const Title = styled.div`
  font-size : 4.0rem;
  color:white;
  font-family: 'Open Sans', sans-serif;
  font-weight:700;
  position: absolute;
  bottom: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -1.2rem;
  left:0;
  right:0;
`

const Titles = styled.div`
  position: relative;
  width: 100%;
  height: 37rem;
  text-align:center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("https://s3.amazonaws.com/spec-imagehosting/cover.jpg");
`


class TitlePage extends Component {

  render() {
    return (
      <Titles>
          <Title>{this.props.title}</Title>
      </Titles>
    );
  }
}

export default TitlePage;
