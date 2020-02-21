import {
  SELECT_SECTION
} from "../constants/actionTypes";

const selectedSection = (state = { name: ""}, action) => {
  switch (action.type) {
    case SELECT_SECTION:
      return action.section
    default:
      return state
  }
}

export default selectedSection