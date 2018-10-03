import { NUM_INPUT, OP_INPUT, DEC_INPUT, CLR_DISPLAY, CALCULATE } from '../actions/types';
import math from 'mathjs';

const initialState = {
    display: '0',
    history: '',
    opIsActive: false,
    decIsActive: false
}

export default function(state = initialState, action) {

    function display() {
        if(state.display === '0' || state.opIsActive) {
            return action.payload;
        } else if(state.display.length > 11) {
            return state.display;
        } else {
            return `${state.display}${action.payload}`;
        }
    }

    function history() {
        if(state.history === '') {
            return `${state.display} ${action.payload}`;
        } else if(state.opIsActive) {
            return `${state.history.substr(0, state.history.length - 1)}${action.payload}`;
        } else {
            return `${state.history} ${state.display} ${action.payload}`;
        }
    }

    function calculate() {
        const formula = `${state.history} ${state.display}`;
        return String(math.eval(formula));
    }

    switch(action.type) {
        case NUM_INPUT:
            return{
                ...state,
                display: display(),
                opIsActive: false
            };
        case OP_INPUT:
            return{
                ...state,
                history: history(),
                opIsActive: true,
                decIsActive: false
            };    
        case DEC_INPUT:
            return{
                ...state,
                display: !state.decIsActive ? `${state.display}.`: state.display,
                decIsActive: true
            };    
        case CLR_DISPLAY:
            return{
                ...state,
                display: '0',
                history: '',
                opIsActive: false,
                decIsActive: false,
            }; 
        case CALCULATE:
            return{
                ...state,
                display: calculate(),
                history: '',
                opIsActive: false,
                decIsActive: false
            };    
        default:
            return state;
    }
}