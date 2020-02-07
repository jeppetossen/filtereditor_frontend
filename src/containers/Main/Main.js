import React, {useLayoutEffect, useEffect, useState} from 'react';

import Subsection from '../../components/Main/Subsection';
import BroadTitle from '../../components/Main/BroadTitle';
import useFetch from "../../api/useFetch";


function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      fetch('http://0.0.0.0:8000/headers/headers_sections.json')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw(res.error);
        }
          setData(res.data.headers);
      })
      .catch(error => {
        setData(error)
      })
    }
  })

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