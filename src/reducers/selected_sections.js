import {
  OPEN_SECTION,
  //CLOSE_SECTION
} from "../constants/actionTypes";

const selectedSection = (state = { name: ""}, action) => {
  switch (action.type) {
    case OPEN_SECTION:
      return action.section
    default:
      return state
  }
}

export default selectedSection