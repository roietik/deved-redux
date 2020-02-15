import {
  FETCH_ALL,
  ADD,
  CHANGE,
  DEC,
  DEL,
  INC,
  RESET
} from "./../reducers/counterReducer";
import FetchApi from "../../api/FetchApi";

export const inc = (num, idx) => {
  return {
    type: INC,
    payload: num,
    idx: idx
  };
};

export const dec = (num, idx) => {
  return {
    type: DEC,
    payload: num,
    idx: idx
  };
};

export const reset = idx => {
  return {
    type: RESET,
    idx: idx
  };
};

export const change = (idx, val) => {
  return {
    type: CHANGE,
    idx: idx,
    val: val
  };
};

export const add = val => {
  return {
    type: ADD,
    payload: val
  };
};

export const del = idx => {
  return {
    type: DEL,
    idx: idx
  };
};

// to jest inaczej bo funkcja asynchroniczna
export const fetchAll = () => {
  return dispatch => {
    FetchApi.getFetch()
      .then(items => {
        dispatch({
          type: FETCH_ALL,
          payload: items
        });
      })
      .catch(isError => {
        console.log(isError);
        dispatch({
          type: FETCH_ALL,
          payload: []
        });
      });
  };
};
