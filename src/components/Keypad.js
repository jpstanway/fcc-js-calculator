import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { numInput, opInput, decInput, clrDisplay, calculate } from '../actions/calcActions';
import { Button } from 'reactstrap';

class Keypad extends Component {
    constructor(props) {
        super(props);

        this.numInput = this.numInput.bind(this);
        this.opInput = this.opInput.bind(this);
    }

    numInput(e) {
        const num = e.target.textContent;
        this.props.numInput(num);
    }

    opInput(e) {
        const op = e.target.textContent;
        this.props.opInput(op);
    }

    render() {
        return(
            <div id="keypad">
                <Button id="clear" className="button extra-w" onClick={this.props.clrDisplay}>C</Button>
                <Button id="divide" className="button operator" onClick={this.opInput}>/</Button>
                <Button id="multiply" className="button operator" onClick={this.opInput}>*</Button>
                <Button id="one" className="button" onClick={this.numInput}>1</Button> 
                <Button id="two" className="button" onClick={this.numInput}>2</Button>
                <Button id="three" className="button" onClick={this.numInput}>3</Button>
                <Button id="add" className="button operator" onClick={this.opInput}>+</Button>
                <Button id="four" className="button" onClick={this.numInput}>4</Button>
                <Button id="five" className="button" onClick={this.numInput}>5</Button>
                <Button id="six" className="button" onClick={this.numInput}>6</Button>
                <Button id="subtract" className="button operator" onClick={this.opInput}>-</Button>
                <Button id="seven" className="button" onClick={this.numInput}>7</Button>
                <Button id="eight" className="button" onClick={this.numInput}>8</Button>
                <Button id="nine" className="button" onClick={this.numInput}>9</Button>
                <Button id="equals" className="button extra-h" onClick={this.props.calculate}>=</Button>
                <Button id="zero" className="button extra-w" onClick={this.numInput}>0</Button>
                <Button id="decimal" className="button" onClick={this.props.decInput}>.</Button>
            </div>
        );
    }
}

Keypad.propTypes = {
    numInput: PropTypes.func.isRequired,
    opInput: PropTypes.func.isRequired,
    decInput: PropTypes.func,
    clrDisplay: PropTypes.func,
    calculate: PropTypes.func
}

export default connect(null, { numInput, opInput, decInput, clrDisplay, calculate })(Keypad);