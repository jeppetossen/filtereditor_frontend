import { connect } from "react-redux";
import BroadTitle from "../../components/Main/BroadTitle";
import { loadSections } from '../../Actions/ActionCreators/LoadSections'
import React from "react";


function Section(sections) {
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

const mapStateToProps = state => {
  return {
    sections: [state]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadSection : dispatch(loadSections())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BroadTitle)