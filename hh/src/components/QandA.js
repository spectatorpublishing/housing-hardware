import React, { Component } from 'react';
import styled from 'styled-components';

let Question = styled.div`
`

let Answer = styled.div`
`
class QandA extends Component {
    render(){
        return (
            <div>
            <Question>{this.props.question}</Question>
            <Answer>{this.props.answer}</Answer>
            </div>
        );
    }
}

export default QandA;