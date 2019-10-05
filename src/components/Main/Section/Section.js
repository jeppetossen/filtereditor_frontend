import React from 'react'

import data from '../../../api/headers.test.json'
//import TitleContext from '../../../TitleContext'

import './Section.css'


function Section() {
  return (
    <React.Fragment>
      {data.sections.map((section) => {
        return (
          <label key={section.uid} id={'BroadTitle' + section.uid} className='BroadTitle'>{section.name}</label>
        )
      })}
    </React.Fragment>
  )
}

export default Section