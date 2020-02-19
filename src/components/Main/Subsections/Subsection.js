import React from 'react'
import {connect} from "react-redux";

//import BlockSection from '../BlockSection'
//import Block from '../Block'

import BlockAndBlocksection from "../BlockOrBlocksection";

import './Subsection.css'

function Subsections(props) {

  const ClickEvent = element => {
    element.target.classList.toggle('open')

    for (const e of element.target.childNodes) {
      if (e.classList.contains('SubsectionBlockContent')) {
        e.classList.toggle('visible')
      }
    }
  }

  return (
    <React.Fragment>
      {props.subsections.map(subsection => {
        if (subsection.parent === props.section_name) {
          return (
              <div
                key={subsection.id}
                className="SubsectionWrapper"
                onClick={e => ClickEvent(e)}
              >
                <label
                  id={'SubsectionLabel' + subsection.id}
                  className='SubsectionLabel'
                >
                  {subsection.name}
                </label>
                <br/>
                <div className="SubsectionBlockContent">
                  <BlockAndBlocksection subsection={subsection}/>
                </div>
              </div>
          )
        } else return null
      })}
    </React.Fragment>
  )
}

export default connect(
  state => ({
    subsections: state.subsections
  }),
  dispatch => ({})
)(Subsections)