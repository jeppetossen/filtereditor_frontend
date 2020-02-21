import {
  SELECT_SUBSECTION,
} from "../constants/actionTypes";

export const selectedSubsectionAction = (subsection) => ({
  type: SELECT_SUBSECTION,
  subsection
})