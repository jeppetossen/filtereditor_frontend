import * as types from '../constants/actionTypes'


const initialState = {loading: false, data: [], status: "", error: null}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_REQUESTED:
      return {
        ...state,
        loading: true,
        status: "pending",
      }
    case types.DATA_RETRIEVED:
      return {
        ...state,
        loading: false,
        error: null,
        status: "retrieved",
        data: [...state.data, action.payload]
      }
    case types.DATA_FAILED:
      return {
        ...state,
        status: "failed",
        loading: false,
        error: action.payload
      }
    default:
      return {...state}
  }
}

/*
function sections (state = initialState, action) {
  switch (action.type) {
    case types.DATA_REQUESTED:
      state = Object.assign({}, state, {status: 'pending'})
      break
    case types.DATA_RETRIEVED:
      state = Object.assign({}, state, {data: [...action.payload], status: "retrieved"})
      break
    case types.DATA_FAILED:
      state = Object.assign({}, state, {error: action.payload, status: "failed"})
      break
  }
  return state
}

export default sections
*/