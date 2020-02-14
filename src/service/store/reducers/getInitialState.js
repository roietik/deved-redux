const getInitialState = (state = [], action) => {
  if (action.type === "ALL") {
    return action.val;
  }
  return state;
};

export default getInitialState;
