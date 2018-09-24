import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0
        }
    }

    render() {
        return(
          <div id="display">
            <p>{this.state.display}</p>
          </div>  
        );
    }
}

export default Display;