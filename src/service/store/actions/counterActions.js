import {
  AXIOS_ALL,
  AXIOS_DEL,
  AXIOS_CHANGE,
  AXIOS_ADD,
  AXIOS_RESET,
  AXIOS_INC,
  AXIOS_DEC,
  ADD,
  CHANGE,
  DEC,
  DEL,
  INC,
  RESET
} from "./../reducers/counterReducer";
import AxiosApi from "../../api/AxiosApi";

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

export const axiosInc = (val, obj, idx) => dispatch => {
  AxiosApi.replaceAxios({ num: obj.num + val, id: obj.id })
    .then(() => {
      dispatch({
        type: AXIOS_INC,
        payload: idx,
        val: val
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

export const axiosDec = (val, obj, idx) => dispatch => {
  AxiosApi.replaceAxios({ num: obj.num - val, id: obj.id })
    .then(() => {
      dispatch({
        type: AXIOS_DEC,
        payload: idx,
        val: val
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

export const axiosAdd = (valFromEvent, idx) => dispatch => {
  AxiosApi.addAxios({ num: Number(valFromEvent) })
    .then(() => {
      dispatch({
        type: AXIOS_ADD,
        payload: idx,
        valFromEvent
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

export const axiosReset = (val, obj, idx) => dispatch => {
  AxiosApi.replaceAxios({ num: val, id: obj.id })
    .then(() => {
      dispatch({
        type: AXIOS_RESET,
        payload: idx,
        val: val
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

export const axiosChange = (valFromEvent, count, idx) => dispatch => {
  AxiosApi.replaceAxios({ num: Number(valFromEvent), id: count.id })
    .then(() => {
      dispatch({
        type: AXIOS_CHANGE,
        payload: idx,
        valFromEvent
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

export const axiosDel = (count, idx) => dispatch => {
  AxiosApi.removeAxios(count)
    .then(() => {
      dispatch({
        type: AXIOS_DEL,
        payload: idx
      });
    })
    .catch(isError => {
      console.log(isError);
    });
};

export const axiosAll = () => dispatch => {
  AxiosApi.getAxios()
    .then(items => {
      dispatch({
        type: AXIOS_ALL,
        payload: items
      });
    })
    .catch(isError => {
      console.log(isError);
      dispatch({
        type: AXIOS_ALL,
        payload: []
      });
    });
};
