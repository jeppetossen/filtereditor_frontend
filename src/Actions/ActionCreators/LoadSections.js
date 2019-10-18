import * as types from '../../constants/actionTypes'


export const loadSections = () => {
  return dispatch => {
    dispatch(loadSectionsRequested())

    fetch('http://0.0.0.0:8000/api/headers/?format=json')
      .then(res => res.json())
      .then(dat => console.log(dat)//dispatch(loadSectionsSuccess(
        //dat["items"]["sections"]
        //))
      )
      .catch(err => {
        dispatch(loadSectionsFailure(err.message))
      })
  }
}

const loadSectionsRequested = () => ({
    type: types.DATA_REQUESTED
  }
)

const loadSectionsSuccess = data => ({
    type: types.DATA_RETRIEVED,
    payload: {data}
  }
)

const loadSectionsFailure = error => ({
    type: types.DATA_FAILED,
    payload: {error}
  }
)