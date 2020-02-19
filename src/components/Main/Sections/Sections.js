import React from 'react'
import {connect} from 'react-redux'

import './Sections.css'
import {selectedSection} from "../../../Actions/selected_section";

const Sections = ({sections, selected_section}) => {
  console.log(selected_section)
  return (
    <div className="sections-wrapper">
      <ul className="sections">
        {sections.map(section => {
          return (
            <li key={section.id} className="sectionListElement">
              <div onClick={e => selected_section(section.name)}>
                <span>{section.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  sections: state.sections
})

const mapDispatchToProps = dispatch => {
  return {
    selected_section: name => {
      dispatch(selectedSection(name))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sections)