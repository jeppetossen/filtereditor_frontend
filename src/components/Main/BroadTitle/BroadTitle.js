import React, { useState, useLayoutEffect } from 'react'

import './BroadTitle.css'

function BroadTitle(props) {
  const [active, setActiveState] = useState(false)
  const [display, setDisplayState] = useState(false)

  /*useLayoutEffect(() => {
    let sections = document.getElementsByClassName('BroadTitle')
    let subsections = {}
    for (let section of sections) {
      if (section.className.includes('closed')) {
        subsections = section.parentNode.childNodes[1].childNodes
        for (let subsection of subsections) {
          if (subsection.className.includes('Subsection')) {
            subsection.className = `Subsection ${active ? 'open' : 'closed'}`
            subsection.style.display = `${display ? 'block' : 'none'}`
            setDisplayState(!display)
            setActiveState(!active)
          }
        }
      }
    }
  }, [active, display])*/

  /*const ClickEvent = event => {
    let element = event.target
    let subsections = element.parentElement.childNodes[1].childNodes
    
    for (let subsection of subsections) {
      subsection.className = `Subsection ${display ? 'closed': 'open'}`
    }
    setActiveState(!active)
    setDisplayState(!display)
  }*/

  return (
    <label
      key={props.section.uid}
      id={'BroadTitle' + props.section.uid}
      className={`BroadTitle ${active ? 'open' : 'closed'}`}
      onClick={e => {
        //setActiveState(!active)
        //ClickEvent(e)
      }}
    >
      {props.section.name}
    </label>
  )
}

export default BroadTitle
