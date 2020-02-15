import { INC, DEC, RESET, ADD, DEL, CHANGE, ALL } from "../actions";

// const initialState = {
//   counts: [
//     {
//       num: "0",
//       id: "NyVdsdN"
//     },
//     {
//       num: "1",
//       id: "NyVdsdN"
//     },
//     {
//       num: "2",
//       id: "NyVdsdN"
//     }
//   ]
// };

const counterReducer = (state = {}, action) => {
  switch (action.type) {
    case INC: {
      const counts = state.counts.map((count, idx) =>
        idx === action.idx
          ? { num: Number(count.num) + Number(action.payload), id: count.id }
          : count
      );
      return { counts };
    }

    case DEC: {
      const counts = state.counts.map((count, idx) =>
        idx === action.idx
          ? { num: Number(count.num) - Number(action.payload), id: count.id }
          : count
      );
      return { counts };
    }
    case RESET: {
      const counts = state.counts.map((count, idx) =>
        idx === action.idx ? { num: 0, id: count.id } : count
      );
      return { counts };
    }
    case ADD: {
      return {
        counts: [...state.counts, { num: action.payload }]
      };
    }
    case DEL: {
      const counts = state.counts.filter((count, idx) => idx !== action.idx);
      return { counts };
    }
    case CHANGE: {
      const counts = state.counts.map((count, idx) =>
        idx === action.idx ? { num: action.val, id: count.id } : count
      );
      return { counts };
    }
    case ALL: {
      console.log("ALL: ", action.state);
      return {
        counts: action.state
      };
    }
    default:
      return state;
  }

  //FIND
};

export default counterReducer;
