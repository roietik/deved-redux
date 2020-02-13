
const counterReducer = (state = 0 , action) => {
    if (action.type === "INC") {
        return state + action.payload
    }
    if (action.type === "DEC") {
        return state - action.payload
    }
    if (action.type === "RESET") {
        return  0
    }
    if (action.type === "ADD") {
        return  action.payload
    }
    return state; 
}

export default counterReducer;