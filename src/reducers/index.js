import { combineReducers } from 'redux'

import selected_section from './selected_sections'

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

const blocksections = (state = blocksections_json.data.headers) => {
  return state
}

const blocks = (state = blocks_json.data.headers) => {
  return state
}

const rootReducer = combineReducers({
  selected_section,
  sections,
  subsections,
  blocksections,
  blocks,
  //editorSettings
})

export default rootReducer
