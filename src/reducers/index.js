import { combineReducers } from 'redux'

import selectedSection from './selected_sections'
import selectedSubsection from "./selected_subsection";
import selectedBlocksection from "./selected_blocksection";

import sections_json from '../data/headers/headers_sections.json'
import subsections_json from '../data/headers/headers_subsections.json'
import blocksections_json from '../data/headers/headers_blocksections.json'
import blocks_json from '../data/headers/headers_blocks.json'

const sections = (state = sections_json.data.headers) => {
  return state
}

const subsections = (state = subsections_json.data.headers) => {
  return state
}

const block_sections = (state = blocksections_json.data.headers) => {
  return state
}

const blocks = (state = blocks_json.data.headers) => {
  return state
}

const rootReducer = combineReducers({
  selectedSection,
  selectedSubsection,
  selectedBlocksection,
  sections,
  subsections,
  block_sections,
  blocks,
  //editorSettings
})

export default rootReducer
