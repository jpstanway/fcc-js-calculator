import { NUM_INPUT, OP_INPUT, DEC_INPUT, CLR_DISPLAY, CALCULATE } from './types';

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

export const decInput = () => dispatch => {
    dispatch({
        type: DEC_INPUT
    });
};

export const clrDisplay = () => dispatch => {
    dispatch({
        type: CLR_DISPLAY
    });
};

export const calculate = () => dispatch => {
    dispatch({
        type: CALCULATE
    });
};