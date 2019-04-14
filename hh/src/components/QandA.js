import React, { Component } from 'react';
import styled from 'styled-components';

let Question = styled.div`
    color : blue;
    font-size: 1.5rem;

`

let Answer = styled.div`
    font-size: 1.25rem;
`
class QandA extends Component {
    render(){
        return (
            <div>
            <Question>Q: {this.props.question}</Question>
            <Answer><b>A: </b> {this.props.answer}</Answer>
            </div>
        );
    }
}

export default QandA;