import React, { Component } from 'react';
import styled from 'styled-components';

let Question = styled.div`
    color : blue;
    font-size: 1.5rem;

`

let Answer = styled.div`
    font-size: 1.25rem;
`

let Container = styled.div`
    font-family: 'Open Sans', sans-serif;
`
class QandA extends Component {
    render(){
        return (
            <Container>
            <Question>Q: {this.props.question}</Question>
            <Answer><b>A: </b> {this.props.answer}</Answer>
            </Container>
        );
    }
}

export default QandA;