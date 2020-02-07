import React from 'react'

//import data from '../../api/headers'

import './Sidebar.css'

function Sidebar () {
  return (
    <div className="sidebar">
      sidebar
    </div>
  )
  /*return (
    <div className='sidebar'>
      {data.sections.map((section) => {
        return (
          <a
            key={section.uid}
            id={'SidebarSection' + section.uid}
            className='SidebarSection'
            href={'#BroadTitle' + section.uid}
          >
            {section.name}
          </a>
        )
      })}
    </div>
  )*/
}

export default Sidebar
