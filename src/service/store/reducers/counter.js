
const initialState = {
    counts: [0,1,2],
    eventVal: 0
}

const counterReducer = (state = initialState, action) => {
    if (action.type === "INC") {
        const counts = state.counts.map((count, idx) => idx === action.idx ? count + action.payload : count)
        return {counts}
    }
    if (action.type === "DEC") {
        const counts = state.counts.map((count, idx) => idx === action.idx ? count - action.payload : count)
        return {counts}
    }
    if (action.type === "RESET") {
        const counts = state.counts.map((count, idx) => idx === action.idx ? 0 : count)
        return {counts}
    }
    if (action.type === "ADD") {
        return  {
            counts: [...state.counts, action.payload]
        }
    }
    if (action.type === "DEL") {
        const counts = state.counts.filter((count, idx) => idx !== action.idx)
        return {counts}
    }
    if (action.type === "CHANGE") {
        const counts = state.counts.map((count, idx) => idx === action.idx ? action.val : count)
        return  {counts}
    }
    return state; 

    //FIND
}

export default counterReducer;