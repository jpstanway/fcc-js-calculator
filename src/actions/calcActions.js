import { NUM_INPUT, OP_INPUT, CLR_DISPLAY } from './types';

export const numInput = (num) => dispatch => {
    dispatch({
        type: NUM_INPUT,
        payload: num
    });
};

export const opInput = (op) => dispatch => {
    dispatch({
        type: OP_INPUT,
        payload: op
    });
};

export const clrDisplay = () => dispatch => {
    dispatch({
        type: CLR_DISPLAY
    });
};

