import FetchApi from '../../api/FetchApi';
import {INC, DEC, RESET, ADD, DEL, CHANGE} from "../actions"

FetchApi.getFetch()
.then(items => {
    console.log(items)
})
.catch(isError => console.log(isError))

const initialState = {
    counts: [
        {
        num: "0",
        id: "NyVdsdN"
        },
        {
        num: "1",
        id: "NyVdsdN"
        },
        {
        num: "2",
        id: "NyVdsdN"
        }
    ]
}

const counterReducer = (state = initialState, action) => {
    if (action.type === INC) {
        const counts = state.counts.map((count, idx) => idx === action.idx ? {num: (Number(count.num) + Number(action.payload)), id: count.id} : count)
        return {counts}
    }
    if (action.type === DEC) {
        const counts = state.counts.map((count, idx) => idx === action.idx ? {num: (Number(count.num) - Number(action.payload)), id: count.id} : count)
        return {counts}
    }
    if (action.type === RESET) {
        const counts = state.counts.map((count, idx) => idx === action.idx ? {num: 0, id: count.id} : count)
        return {counts}
    }

    if (action.type === ADD) {
        FetchApi.addFetch({num: action.payload})
        .then(
            () => {
                return  {
                    counts: [...state.counts, {num: action.payload}]
                }
            }
        )
        .catch(err => console.log(err))
    }

    if (action.type === DEL) {
        const counts = state.counts.filter((count, idx) => idx !== action.idx)
        return {counts}
    }
    if (action.type === CHANGE) {
        const counts = state.counts.map((count, idx) => idx === action.idx ? {num: action.val, id: count.id} : count)

        return  {counts}
    }
    return state; 

    //FIND
}

export default counterReducer;