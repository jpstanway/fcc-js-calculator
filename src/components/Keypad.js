import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Keypad extends Component {
    render() {
        return(
            <div id="keypad">
                <Button id="clear" className="button" color="primary">C</Button>
                <Button id="one" className="button" color="primary">1</Button>
                <Button id="two" className="button" color="primary">2</Button>
                <Button id="three" className="button" color="primary">3</Button>
                <Button id="four" className="button" color="primary">4</Button>
                <Button id="five" className="button" color="primary">5</Button>
                <Button id="six" className="button" color="primary">6</Button>
                <Button id="seven" className="button" color="primary">7</Button>
                <Button id="eight" className="button" color="primary">8</Button>
                <Button id="nine" className="button" color="primary">9</Button>
                <Button id="zero" className="button" color="primary">0</Button>
                <Button id="add" className="button" color="primary">+</Button>
                <Button id="subtract" className="button" color="primary">-</Button>
                <Button id="multiply" className="button" color="primary">X</Button>
                <Button id="divide" className="button" color="primary">/</Button>
                <Button id="decimal" className="button" color="primary">.</Button>
                <Button id="equals" className="button" color="primary">=</Button>
            </div>
        );
    }
}

export default Keypad;