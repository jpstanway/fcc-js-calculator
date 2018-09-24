import { NUM_INPUT, CLR_DISPLAY } from './types';

export const numInput = (num) => dispatch => {
    dispatch({
        type: NUM_INPUT,
        payload: num
    });
};

export const clrDisplay = () => dispatch => {
    dispatch({
        type: CLR_DISPLAY
    });
};

