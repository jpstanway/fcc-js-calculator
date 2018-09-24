import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Display extends Component {
    render() {
        return(
          <div id="display">
            <p>{this.props.history}</p>
            <p>{this.props.display}</p>
          </div>  
        );
    }
}

Display.propTypes = {
    display: PropTypes.string.isRequired,
    history: PropTypes.string
}

const mapStateToProps = state => ({
    display: state.calculator.display,
    history: state.calculator.history
});

export default connect(mapStateToProps, {})(Display);