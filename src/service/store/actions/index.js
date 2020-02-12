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