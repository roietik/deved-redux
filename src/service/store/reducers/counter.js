
const counterReducer = (state = 0 , action) => {
    if (action.type === "INC") {
        return state + action.payload
    }
    if (action.type === "DEC") {
        return state - action.payload
    }
    return state; 
}

export default counterReducer;