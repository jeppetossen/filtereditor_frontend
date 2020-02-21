import React from 'react'
import { connect } from 'react-redux'

import {selectedSubsectionAction as selectedSubsection} from "../../../Actions/selected_subsection";
import {selectedBlocksectionAction as selectedBlocksection} from "../../../Actions/selected_blocksection";

import './Sidebar.css'

const LeftSidebar = ({section_name, subsections, selected_subsection}) => {
  const [section, setSection] = React.useState(null)

  React.useEffect(() => {
    if (section !== section_name) {
      setSection(section_name)
    }
  }, [section, section_name])


  return (
    <div className="left_sidebar-wrapper">
      <div className="sidebar">
        {subsections.map(subsection => {
          if (subsection.parent === section_name) {
            return (
              <div
                key={subsection.id}
                id={'SidebarSection' + subsection.id}
                className='SidebarSection'
                onClick={e => selected_subsection(subsection.name)}
              >
                {subsection.name}
              </div>
            )
          } else return null
        })}
      </div>
    </div>
  )
}

const RightSidebar = ({subsection_name, block_sections, selected_block_section}) => {
  const [subsection, setSubsection] = React.useState(null)

  React.useEffect(() => {
    if (subsection !== subsection_name) {
      setSubsection(subsection_name)
    }
  }, [subsection, subsection_name])

  return (
    <div className="right_sidebar-wrapper">
      <div className="sidebar">
        {block_sections.map(block_section => {
          if (block_section.parent === subsection_name) {
            return (
              <div
                key={block_section.id}
                id={'SidebarSection' + block_section.id}
                className='SidebarSection'
                onClick={e => {selected_block_section(block_section.name)}}
              >
                {block_section.name}
              </div>
            )
          } else return null
        })}
      </div>
    </div>
  )
}

const Sidebar = (props) => {
  //const [section, setSection] = React.useState(null)
  //const [subsection, setSubsection] = React.useState(null)

  /*
  React.useEffect(() => {
    if (section !== props.selected_section) {
      setSection(props.selected_section)
    }
    if (subsection !== props.selected_subsection) {
      setSubsection(props.selected_subsection)
    }
  }, [section, props.selected_section, subsection, props.selected_subsection])
  */

  return (
    <React.Fragment>
      <LeftSidebar
        section_name={props.selected_section}
        subsections={props.subsections}
        selected_subsection={props.d_selected_subsection}
      />
      <RightSidebar
        subsection_name={props.selected_subsection}
        block_sections={props.block_sections}
        selected_block_section={props.d_selected_block_section}
      />
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  selected_section: state.selectedSection,
  selected_subsection: state.selectedSubsection,
  selected_block_section: state.selectedBlocksection,
  subsections: state.subsections,
  block_sections: state.block_sections
})

const mapDispatchToProps = dispatch => {
  return {
    d_selected_subsection: name => {
      dispatch(selectedSubsection(name))
    },
    d_selected_block_section: name => {
      dispatch(selectedBlocksection(name))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
