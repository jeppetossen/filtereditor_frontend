import React from 'react';
import {connect} from "react-redux";

import Sidebar from "./Sidebar";
import Subsections from './Subsections';
import BroadTitle from './BroadTitle';
import Section from "./Sections";

import './Main.css'

const Main = (props) => {
  return (
    <main className="main-wrapper">
      <Section/>
      <Sidebar/>
      <div className="visual-wrapper">
        <div className="box-wrapper">
          <div id='visual' className="visual">
            {props.sections.map(section => {
              return (
                <div key={section.id} className='section-container'>
                  <BroadTitle id={section.id} name={section.name}/>
                  <Subsections section_name={section.name}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default connect(
  state => ({
    sections: state.sections
  }),
  dispatch => ({})
)(Main)