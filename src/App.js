import React, { Component } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
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
