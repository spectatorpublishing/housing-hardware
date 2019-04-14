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
  height:30rem;
  text-align:center;
  background-position: center; 
  background-repeat: no-repeat;
  background-image: url("https://cdn.pixabay.com/photo/2016/02/09/12/25/puppy-1189067_960_720.jpg");
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
