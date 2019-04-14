import React, { Component } from 'react';
import styled from 'styled-components';

let Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-bottom: 40px;
  border-radius: 10px;
  @media only screen and (max-width: 600px){
  	width: 100%;
  }
`

class Pic extends Component {
    render(){
        return (
            <Image src = {this.props.img}></Image>
        );
    }
}

export default Pic;