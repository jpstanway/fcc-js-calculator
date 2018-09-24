import React, { Component } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './stylesheets/App.css';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Display />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
