import {
  SELECT_SECTION,
} from "../constants/actionTypes";

export const selectedSectionAction = (section) => ({
  type: SELECT_SECTION,
  section
})