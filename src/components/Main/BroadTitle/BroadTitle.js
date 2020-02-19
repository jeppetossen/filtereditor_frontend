import React, {useState} from 'react'

import './BroadTitle.css'

function BroadTitle({ id, name }) {
  const [display, setDisplayState] = useState(false);

  const ClickEvent = event => {
    let element = event.target;
    let subsections = element.parentElement.childNodes;


    for (let subsection of subsections) {
      subsection.classList.toggle('visible')
    }
    setDisplayState(!display)
  };

  return (
    <React.Fragment>
      <label
        key={id}
        id={'BroadTitle' + id}
        className={`BroadTitle ${display ? 'open': 'closed'}`}
        onClick={e => ClickEvent(e)}
      >
        {name}
      </label>
    </React.Fragment>
  )
}

export default BroadTitle
