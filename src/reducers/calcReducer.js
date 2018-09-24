import { NUM_INPUT } from '../actions/types';

const initialState = {
    display: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case NUM_INPUT:
            return{
                ...state,
                display: state.display === 0 ? action.payload : state.display + action.payload
            };
        default:
            return state;
    }
}