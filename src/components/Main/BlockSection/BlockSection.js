import React, { useState } from 'react'
import { connect } from 'react-redux'

import Block from '../Block'

import './BlockSection.css'

function BlockSection(props) {
  const [display, setDisplay] = useState(false)

  /*const ClickEvent = event => {
    let element = event.target;
    let
  }*/

  return (
    <React.Fragment>
      <div
        key={props.block_section.id}
        className={`BlockSection ${display ? 'open' : 'closed'}`}
        onClick={e => setDisplay(!display)}
      >
        <label
          id={'BlockSectionLabel' + props.block_section.id}
          className='BlockSectionLabel'
        >
          {props.block_section.name}
        </label>
      </div>
      <div
        className={`BlockSectionContent ${display ? 'open' : 'closed'}`}
        //onClick={() => setDisplay(!display)}
      >
        {props.blocks.map(block => {
          if (props.block_section.name === block.parent) {
            return <Block block={block} />
          } else return null
        })}
      </div>
    </React.Fragment>
  )
}

export default connect(
  state => ({
    blocks: state.blocks
  }),
  dispatch => ({})
)(BlockSection)

