import React, { Component } from 'react';
import styled from 'styled-components';


const Title = styled.div`
  font-size : 8rem;
  color:white;
  font-family: 'Open Sans', sans-serif;
  font-weight:700;
  position: absolute;
  bottom: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2.6rem;
  left:0;
  right:0;

  @media only screen and (max-width: 600px){
    font-size: 5rem;
    margin-bottom: -1.5rem;
  }
`

const Titles = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  text-align:center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("https://s3.amazonaws.com/spec-imagehosting/cover.jpg");

  @media only screen and (max-width: 600px){
    height: 30rem;
  }
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
