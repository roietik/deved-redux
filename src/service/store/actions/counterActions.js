import {
  FETCH_ALL,
  FETCH_DEL,
  FETCH_CHANGE,
  FETCH_ADD,
  FETCH_RESET,
  FETCH_INC,
  FETCH_DEC,
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

export const fetchInc = (val, obj, idx) => dispatch => {
  FetchApi.replaceFetch({ num: obj.num + val, id: obj.id })
    .then(() => {
      dispatch({
        type: FETCH_INC,
        payload: idx,
        val: val
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

export const fetchDec = (val, obj, idx) => dispatch => {
  FetchApi.replaceFetch({ num: obj.num - val, id: obj.id })
    .then(() => {
      dispatch({
        type: FETCH_DEC,
        payload: idx,
        val: val
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

export const fetchAdd = (valFromEvent, idx) => dispatch => {
  FetchApi.addFetch({ num: Number(valFromEvent) })
    .then(() => {
      dispatch({
        type: FETCH_ADD,
        payload: idx,
        valFromEvent
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

export const fetchReset = (val, obj, idx) => dispatch => {
  FetchApi.replaceFetch({ num: val, id: obj.id })
    .then(() => {
      dispatch({
        type: FETCH_RESET,
        payload: idx,
        val: val
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

export const fetchChange = (valFromEvent, count, idx) => dispatch => {
  FetchApi.replaceFetch({ num: Number(valFromEvent), id: count.id })
    .then(() => {
      dispatch({
        type: FETCH_CHANGE,
        payload: idx,
        valFromEvent
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

export const fetchDel = (count, idx) => dispatch => {
  FetchApi.removeFetch(count)
    .then(() => {
      dispatch({
        type: FETCH_DEL,
        payload: idx
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

// to jest inaczej bo funkcja asynchroniczna
export const fetchAll = () => dispatch => {
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
