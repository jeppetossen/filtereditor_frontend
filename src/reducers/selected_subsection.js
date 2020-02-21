import {
  SELECT_SUBSECTION
} from "../constants/actionTypes";

const selectedSubsectionReducer = (state = { name: ""}, action) => {
  switch (action.type) {
    case SELECT_SUBSECTION:
      return action.subsection
    default:
      return state
  }
}

export default selectedSubsectionReducer