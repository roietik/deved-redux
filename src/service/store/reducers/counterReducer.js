import uuid from "react-uuid";

export const INC = "INC";
export const DEC = "DEC";
export const RESET = "RESET";
export const CHANGE = "CHANGE";
export const ADD = "ADD";
export const DEL = "DEL";

export const AXIOS_ALL = "AXIOS_ALL";
export const AXIOS_DEL = "AXIOS_DEL";
export const AXIOS_CHANGE = "AXIOS_CHANGE";
export const AXIOS_ADD = "AXIOS_ADD";
export const AXIOS_RESET = "AXIOS_RESET";
export const AXIOS_DEC = "AXIOS_DEC";
export const AXIOS_INC = "AXIOS_INC";

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
      const counts = state.counts.filter((_, idx) => idx !== action.idx);
      return { ...state, counts };
    }
    case CHANGE: {
      const counts = state.counts.map((count, idx) =>
        idx === action.idx ? { num: action.val, id: count.id } : count
      );
      return { ...state, counts };
    }
    case AXIOS_INC: {
      const counts = state.counts.map((count, idx) =>
        idx === action.payload
          ? { num: Number(count.num) + Number(action.val), id: count.id }
          : count
      );
      return { ...state, counts };
    }
    case AXIOS_DEC: {
      const counts = state.counts.map((count, idx) =>
        idx === action.payload
          ? { num: Number(count.num) - Number(action.val), id: count.id }
          : count
      );
      return { ...state, counts };
    }
    case AXIOS_ADD: {
      const counts = [...state.counts];
      counts.push({ num: action.valFromEvent, id: uuid() });
      return { ...state, counts };
    }

    case AXIOS_RESET: {
      const counts = state.counts.map((count, idx) =>
        idx === action.payload ? { num: action.val, id: count.id } : count
      );
      return { ...state, counts };
    }
    case AXIOS_CHANGE: {
      const counts = state.counts.map((count, idx) =>
        idx === action.payload
          ? { num: action.valFromEvent, id: count.id }
          : count
      );
      return { ...state, counts };
    }
    case AXIOS_DEL: {
      const counts = state.counts.filter((_, idx) => idx !== action.payload);
      return {
        ...state,
        counts: counts
      };
    }
    case AXIOS_ALL: {
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
