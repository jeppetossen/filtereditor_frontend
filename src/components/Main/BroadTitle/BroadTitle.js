import React, {useState} from 'react'

import './BroadTitle.css'


function BroadTitle(sections) {
  const [display, setDisplayState] = useState(false)

  const ClickEvent = event => {
    let element = event.target
    let subsections = element.parentElement.childNodes[1].childNodes

    for (let subsection of subsections) {
      subsection.className = `Subsection ${display ? 'closed' : 'open'}`
    }
    setDisplayState(!display)
  }

  return (
    <React.Fragment>
      {sections.map(section => {
        return (
          <label
            key={section.uid}
            id={'BroadTitle' + section.uid}
            className={`BroadTitle ${display ? 'open': 'closed'}`}
            onClick={e => ClickEvent(e)}
          >
            {section.name}
          </label>
        )
      })}
    </React.Fragment>
  )
}

/*
function BroadTitle(props) {
  const [display, setDisplayState] = useState(false)

  const ClickEvent = event => {
    let element = event.target
    let subsections = element.parentElement.childNodes[1].childNodes
    
    for (let subsection of subsections) {
      subsection.className = `Subsection ${display ? 'closed': 'open'}`
    }
    setDisplayState(!display)
  }

  return (
    <label
      key={props.section.uid}
      id={'BroadTitle' + props.section.uid}
      className={`BroadTitle ${display ? 'open' : 'closed'}`}
      onClick={e => ClickEvent(e)}
    >
      {props.section.name}
    </label>
  )
}
*/

export default BroadTitle
