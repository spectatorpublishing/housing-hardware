import React, { Component } from 'react';
import styled from 'styled-components';

let Image = styled.img`
`

class Pic extends Component {
    render(){
        return (
            <Image src = {this.props.img}></Image>
        );
    }
}

export default Pic;