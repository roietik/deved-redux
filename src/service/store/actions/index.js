export const inc = num => {
    return {
        type: 'INC',
        payload: num
    };
};

export const dec = num => {
    return {
        type: 'DEC',
        payload: num
    };
};

export const reset =() => {
    return {
        type: 'RESET'
    };
};

export const add = val => {
    return {
        type: 'ADD',
        payload: val
    };
};