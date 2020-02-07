import * as types from '../../constants/actionTypes'


export const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataRequested())

    fetch('http://0.0.0.0:8000/api/headers/?format=json')
      .then(res => {
        dispatch(fetchDataSuccess(res.json()))
      })
      .catch(err => {
        dispatch(fetchDataFailure(err.message))
      })
  }
}

const fetchDataRequested = () => ({
    type: types.DATA_REQUESTED
  }
)

const fetchDataSuccess = data => ({
    type: types.DATA_RETRIEVED,
    payload: data
  }
)

const fetchDataFailure = error => ({
    type: types.DATA_FAILED,
    payload: {error}
  }
)