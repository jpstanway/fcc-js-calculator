import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Display extends Component {
    render() {
        return(
          <div id="display">
            <p>{this.props.display}</p>
          </div>  
        );
    }
}

Display.propTypes = {
    display: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    display: state.calculator.display
});

export default connect(mapStateToProps, {})(Display);