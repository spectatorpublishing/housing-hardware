import React, { Component } from 'react';
import styled from 'styled-components';

let Question = styled.div`
    color: #2651C1;
    font-size: 1.8rem;
    margin-bottom: 10px;
`

let Answer = styled.div`
    font-size: 1.3rem;
    margin-bottom: 40px;
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