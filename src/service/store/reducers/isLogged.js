const loggedReducer = (state =  false, action) => {
    if (action.type === "SIGN_IN") {
        return !state
    }
    return state;
}

export default loggedReducer;