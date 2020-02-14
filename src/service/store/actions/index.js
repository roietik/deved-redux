export const INC = 'INC';
export const DEC = 'DEC';
export const RESET = 'RESET';
export const CHANGE = 'CHANGE';
export const ADD = 'ADD';
export const DEL = 'DEL';


export const inc = (num, idx) => {
    return {
        type: INC,
        payload: num,
        idx: idx
    };
};

export const dec = (num, idx) => {
    return {
        type: DEC,
        payload: num,
        idx: idx
    };
};

export const reset = idx => {
    return {
        type: RESET,
        idx: idx
    };
};

export const change = (idx, val) => {
    console.log( 'actions:', val)
    return {
        type: CHANGE,
        idx: idx,
        val: val
    };
};

export const add = val => {
    return {
        type: ADD,
        payload: val
    };
};

export const del = idx => {
    return {
        type: DEL,
        idx: idx
    };
};