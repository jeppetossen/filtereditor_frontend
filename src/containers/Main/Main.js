/*
import React from 'react';
import { connect } from "react-redux";

import Subsection from '../../components/Main/Subsection';
import BroadTitle from '../../components/Main/BroadTitle';

import './Main.css'

const Main = (props) => {
  return (
    <div id='visual'>
      {props.sections.map(section => {
        return (
          <div key={section.id} className='section-container'>
            <BroadTitle id={section.id} name={section.name}/>
            <Subsection section={section.name}/>
          </div>
        )
      })}
    </div>
  )
}

export default connect(
  state => ({
    sections: state.sections
  }),
  dispatch => ({})
)(Main)
*/
/*
function Main() {
  const [data, setData] = useState([]);

  if (!data) {
    return (
      <div id="visual">
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <div id='visual'>
      {data.map(section => {
        return (
          <div className='section-container'>
            <BroadTitle id={section.id} name={section.name}/>
            <Subsection section={section.name}/>
          </div>
        )
      })}
    </div>
  )
}

export default Main
*/