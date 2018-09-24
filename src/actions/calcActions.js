import { NUM_INPUT } from './types';

export const numInput = (num) => dispatch => {
    dispatch({
        type: NUM_INPUT,
        payload: num
    });
};