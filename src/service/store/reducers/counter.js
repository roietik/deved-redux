
const counterReducer = (state = 0 , action) => {
    if (action.type === "INC") {
        return state + 1
    }
    if (action.type === "DEC") {
        return state - 1
    }
    return state;
}

export default counterReducer;