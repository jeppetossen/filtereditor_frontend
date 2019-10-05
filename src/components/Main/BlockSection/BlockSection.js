import React, { useState } from 'react'

import Block from '../Block'

import './BlockSection.css'

function BlockSection(props) {
  const [active, setActiveState] = useState(false)

  return (
    <React.Fragment>
      <div
        className={`BlockSection ${active ? 'open' : 'closed'}`}
        onClick={e => setActiveState(!active)}
      >
        <label
          key={props.blocksection.uid}
          id={'BlockSectionLabel' + props.blocksection.uid}
          className='BlockSectionLabel'
        >
          {props.blocksection.name}
        </label>
      </div>
      <div
        className={`BlockSectionContent ${active ? 'open' : 'closed'}`}
        onClick={() => setActiveState(!active)}
      >
        {props.blocksection.blocks.map(block => {
          return <Block block={block} />
        })}
      </div>
    </React.Fragment>
  )
}

export default BlockSection
