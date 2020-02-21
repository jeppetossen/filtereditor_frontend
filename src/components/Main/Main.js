import React from 'react';
import {connect} from "react-redux";

import Subsections from './Subsections';
import BroadTitle from './BroadTitle';
import Section from "./Sections";
import Editor from "./Editor";

import './Main.css'
import Sidebar from "./Sidebar/sidebar";

const Main = (props) => {
  return (
    <main className="main-wrapper">
      <Section />
      <Sidebar />
      <div className="visual-wrapper">
        <div className="box-wrapper">
          <div id='visual' className="visual">
            {props.sections.map(section => {
              return (
                <div key={section.id} className='section-container'>
                  {/*<BroadTitle id={section.id} name={section.name}/>*/}
                  <Editor />
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