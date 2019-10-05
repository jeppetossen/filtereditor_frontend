import { combineReducers } from 'redux'

import section from './section'
import subsection from './subsection'
import blocksection from './blocksection'
import block from './block'
import blocksettings from './blocksettings'

const rootReducer = combineReducers({
  section,
  subsection,
  blocksection,
  block,
  blocksettings
})

export default rootReducer
