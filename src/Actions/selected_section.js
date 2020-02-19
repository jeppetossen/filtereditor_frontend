import {
  OPEN_SECTION,
  CLOSE_SECTION
} from "../constants/actionTypes";

export const selectedSection = (section) => ({
  type: OPEN_SECTION,
  section
})

export const deselectSection = (section) => ({
  type: CLOSE_SECTION,
  section
})