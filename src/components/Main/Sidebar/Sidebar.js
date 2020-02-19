import React from 'react'
import { connect } from 'react-redux'

import './Sidebar.css'


const Sidebar = (props) => {
  const [section, setSection] = React.useState(null)

  React.useEffect(() => {
    if (section !== props.selected_section) {
      setSection(props.selected_section)
    }
    console.log(section)
  }, [section])

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        {props.subsections.map(subsection => {
          if (subsection.parent === props.selected_section) {
            return (
              <a key={subsection.id}
                 id={'SidebarSection' + subsection.id}
                 className='SidebarSection'
                 href={'#BroadTitle' + subsection.id}
              >
                {subsection.name}
              </a>
            )
          } else return null
        })}
      </div>
    </div>
  )
}

export default connect(
  state => ({
    //sections: state.sections
    selected_section: state.selected_section,
    subsections: state.subsections
  }),
  dispatch => ({})
)(Sidebar)
