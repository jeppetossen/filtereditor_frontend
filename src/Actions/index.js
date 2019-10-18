import {bindActionCreators} from "redux";
import * as types from '../constants/actionTypes'


export const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataRequested())

    fetch('http://0.0.0.0:8000/api/headers/?format=json')
      .then(res => {
        dispatch(fetchDataSuccess(res.json()))
      })
      .catch(err => {
        dispatch(fetchDataFailure(err.messageFetch))
      })
  }
}

const fetchDataRequested = () => ({
    type: types.DATA_REQUESTED
  }
)

const fetchDataSuccess = data => ({
    type: types.DATA_RETRIEVED,
    payload: {...data}
  }
)

const fetchDataFailure = error => ({
    type: types.DATA_FAILED,
    payload: {error}
  }
)

/*
export function getSectionsAction() {
  return function(dispatch) {
    dispatch({
      type: types.DATA_REQUESTED,
    })

    fetch('http://0.0.0.0:8000/api/headers/?format=json')
      .then(response => response.json())
      .then(data => dispatch({
        type: types.DATA_RETRIEVED,
        payload: data
      }))
      .catch(error => dispatch({
        type: types.DATA_FAILED
      }))
  }
}
*/
/*
const  = bindActionCreators(
  {
    getSections
  }
)
*/