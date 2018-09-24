import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Display from './components/Display';
import Keypad from './components/Keypad';
import store from './store';
import './stylesheets/App.css';

class Calculator extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="calculator">
        <Display />
        <Keypad />
      </div>
      </Provider>
    );
  }
}

export default Calculator;
