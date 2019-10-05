import React, { useState } from 'react'

import './Main.css'

import BroadTitle from './BroadTitle'
import Subsection from './Subsection'

import data from '../../api/headers.test.json'

function Main() {

  return (
    <div id='visual'>
      {data.sections.map(section => {
        return (
          <div className='section-container'>
            <BroadTitle section={section} />
            <div className='subsections-container'>
              {section.subsections.map(subsection => {
                return (
                  <React.Fragment>
                    <Subsection subsection={subsection} group={section.name} />
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Main
