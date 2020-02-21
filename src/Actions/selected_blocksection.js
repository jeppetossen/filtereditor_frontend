import {
  SELECT_BLOCKSECTION
} from "../constants/actionTypes";

export const selectedBlocksectionAction = (block_section) => ({
  type: SELECT_BLOCKSECTION,
  block_section
})