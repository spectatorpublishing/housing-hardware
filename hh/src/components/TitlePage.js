import React, { Component } from 'react';
import styled from 'styled-components';


const Title = styled.div`
  font-size : 4.0rem;
  color:white;
  position: absolute;
  font-family: 'Open Sans', sans-serif;
  bottom: 0;
  font-weight:700;
`

const Titles = styled.div`
  position: relative;
  height:30rem;
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
