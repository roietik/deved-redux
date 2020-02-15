import uuid from "react-uuid";

export const INC = "INC";
export const DEC = "DEC";
export const RESET = "RESET";
export const CHANGE = "CHANGE";
export const ADD = "ADD";
export const DEL = "DEL";

export const FETCH_ALL = "FETCH_ALL";
export const FETCH_DEL = "FETCH_DEL";
export const FETCH_CHANGE = "FETCH_CHANGE";
export const FETCH_ADD = "FETCH_ADD";

const initialState = {
  counts: [
    {
      num: "Loading...",
      id: "NyVdsdN"
    }
  ]
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: {
      const counts = state.counts.map((count, idx) =>
        idx === action.idx
          ? { num: Number(count.num) + Number(action.payload), id: count.id }
          : count
      );
      return { ...state, counts };
    }

    case DEC: {
      const counts = state.counts.map((count, idx) =>
        idx === action.idx
          ? { num: Number(count.num) - Number(action.payload), id: count.id }
          : count
      );
      return { ...state, counts };
    }
    case RESET: {
      const counts = state.counts.map((count, idx) =>
        idx === action.idx ? { num: 0, id: count.id } : count
      );
      return { ...state, counts };
    }
    case ADD: {
      const counts = [...state.counts];
      counts.push({ num: action.payload, id: uuid() });
      return { ...state, counts };
    }
    case DEL: {
      const counts = state.counts.filter((count, idx) => idx !== action.idx);
      return { ...state, counts };
    }
    case CHANGE: {
      const counts = state.counts.map((count, idx) =>
        idx === action.idx ? { num: action.val, id: count.id } : count
      );
      return { ...state, counts };
    }
    case FETCH_ADD: {
      const counts = [...state.counts];
      counts.push({ num: action.valFromEvent, id: uuid() });
      return { ...state, counts };
    }
    case FETCH_CHANGE: {
      const counts = state.counts.map((count, idx) =>
        idx === action.payload
          ? { num: action.valFromEvent, id: count.id }
          : count
      );
      return { ...state, counts };
    }
    case FETCH_DEL: {
      const counts = state.counts.filter(
        (count, idx) => idx !== action.payload
      );
      return {
        ...state,
        counts: counts
      };
    }
    case FETCH_ALL: {
      return {
        ...state,
        counts: action.payload
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
