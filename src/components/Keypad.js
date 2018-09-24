import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { numInput, clrDisplay } from '../actions/calcActions';
import { Button } from 'reactstrap';

class Keypad extends Component {
    constructor(props) {
        super(props);

        this.numInput = this.numInput.bind(this);
    }

    numInput(e) {
        const num = e.target.textContent;
        this.props.numInput(num);
    }

    render() {
        return(
            <div id="keypad">
                <Button id="clear" className="button" onClick={this.props.clrDisplay}>C</Button>
                <Button id="two" className="button" onClick={this.numInput}>2</Button>
                <Button id="one" className="button" onClick={this.numInput}>1</Button>
                <Button id="three" className="button" onClick={this.numInput}>3</Button>
                <Button id="four" className="button" onClick={this.numInput}>4</Button>
                <Button id="five" className="button" onClick={this.numInput}>5</Button>
                <Button id="six" className="button" onClick={this.numInput}>6</Button>
                <Button id="seven" className="button" onClick={this.numInput}>7</Button>
                <Button id="eight" className="button" onClick={this.numInput}>8</Button>
                <Button id="nine" className="button" onClick={this.numInput}>9</Button>
                <Button id="zero" className="button" onClick={this.numInput}>0</Button>
                <Button id="add" className="button" >+</Button>
                <Button id="subtract" className="button" >-</Button>
                <Button id="multiply" className="button" >X</Button>
                <Button id="divide" className="button" >/</Button>
                <Button id="decimal" className="button" >.</Button>
                <Button id="equals" className="button" >=</Button>
            </div>
        );
    }
}

Keypad.propTypes = {
    numInput: PropTypes.func.isRequired
}

export default connect(null, { numInput, clrDisplay })(Keypad);