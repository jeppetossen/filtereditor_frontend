import {
  SELECT_BLOCKSECTION
} from "../constants/actionTypes";

const selectedBlocksection = (state = {name: ""}, action) => {
  switch (action.type) {
    case SELECT_BLOCKSECTION:
      return action.block_section
    default:
      return state
  }
}

export default selectedBlocksection