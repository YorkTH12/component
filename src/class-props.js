import React,{ Component } from 'react';

export default class Msgbox extends Component {
  render() {
    const divStyle = {
        margin: '10px',
        padding: '5px',
        border: 'this.props.border',
        backgroundColor: this.props.bgColor,
        color: this.props.color,
        fontSize: this
    };

    return<div style={divStyle}>{this.props.text}</div>
    }
}