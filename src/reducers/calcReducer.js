import { NUM_INPUT, OP_INPUT, CLR_DISPLAY } from '../actions/types';

const initialState = {
    display: '0',
    history: '',
    opIsActive: false
}

export default function(state = initialState, action) {

    function display() {
        if(state.display === '0' || state.opIsActive) {
            return action.payload;
        } else {
            return `${state.display}${action.payload}`;
        }
    }

    function history() {
        if(state.history === '') {
            return `${state.display} ${action.payload}`;
        } else {
            return `${state.history} ${state.display} ${action.payload}`;
        }
    }

    switch(action.type) {
        case NUM_INPUT:
            return{
                ...state,
                display: display(),
                opIsActive: state.opIsActive ? false : true
            };
        case OP_INPUT:
            return{
                ...state,
                history: history(),
                opIsActive: true
            };    
        case CLR_DISPLAY:
            return{
                ...state,
                display: '0',
                history: ''
            }; 
        default:
            return state;
    }
}