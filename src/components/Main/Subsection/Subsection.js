import React, { useEffect, useLayoutEffect, useState } from 'react'

import BlockSection from '../BlockSection'
import Block from '../Block'

import './Subsection.css'


/*
function BlockAndBlocksection(props) {
  if (props.subsection.editor === 'True') {
    return (
      <div className='BlockSectionContent'>
        {props.subsection.blocks.map(block => {
          return <Block block={block} group={block.group} />
        })}
      </div>
    )
  } else {
    return props.subsection.blocksections.map(blocksection => {
      return (
        <BlockSection blocksection={blocksection} group={blocksection.group} />
      )
    })
  }
}
*/
/*
function Subsection(props) {
  const [active, setActiveState] = useState(false)

  const ClickEvent = event => {
    let subsections = event.target
    console.log(subsections)
  }

  return (
    <React.Fragment>
      <div
        className={`Subsection ${active ? 'open' : 'closed'}`}
        onClick={e => {
          //ClickEvent(e)
          setActiveState(!active)
        }}
      >
        <label
          key={props.subsection.uid}
          id={'SubsectionLabel' + props.subsection.uid}
          className='SubsectionLabel'
        >
          {props.subsection.name}
        </label>
        <br></br>
        <div className={`SubsectionBlockContent ${active ? 'open' : 'closed'}`}>
          <BlockAndBlocksection subsection={props.subsection} />
        </div>
      </div>
    </React.Fragment>
  )
}
*/


function Subsection(props) {
  const [display, setDisplayState] = useState(false)

  return (
    <React.Fragment>
      <div
        className={`Subsection ${display ? 'open' : 'closed'}`}
        onClick={e => {
          //ClickEvent(e)
          setDisplayState(!display)
        }}
      >
        <label
          key={props.section.uid}
          id={'SubsectionLabel' + props.section.uid}
          className='SubsectionLabel'
        >
          {props.section.name}
        </label>
        <br></br>
        <div className={`SubsectionBlockContent ${!display ? 'open' : 'closed'}`}>
          {/*<BlockAndBlocksection subsection={props.section} />*/}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Subsection
