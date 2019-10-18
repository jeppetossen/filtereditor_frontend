//import "core-js/stable"
//import "regenerator-runtime/runtime"
import React, { useLayoutEffect, useEffect, useState } from 'react'
//import BroadTitle from "../../components/Main/BroadTitle";
import Subscription from 'react-redux/src/utils/Subscription'
import subsection from '../../reducers/subsection'
import Subsection from '../../components/Main/Subsection'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { connect } from 'react-redux'

import { fetchData } from '../../Actions/ActionCreators/FetchData'

/*
async function getData(url='') {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    redirect: 'follow',
    referrer: 'no-referrer',
    //body: JSON.stringify(data)
  })
  return await response.json()
}
*/
/*
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}
*/
//'http://0.0.0.0:8000/api/headers/?format=json'
/*
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let mounted = true;
    const abortController = new AbortController();
    (async () => {
      const res = await fetch(url, {
        signal: abortController.signal,
      });
      const data = await res.json();
      if (mounted) setData(data);
    })();
    const cleanup = () => {
      mounted = false;
      abortController.abort();
    };
    return cleanup;
  }, [url]);
  return data;
};
*/

function Main({ data }) {
  //const [data, setData] = useState([])

  /*useLayoutEffect(() => {
    let url = 'http://0.0.0.0:8000/api/headers/?format=json'
    async function fetchApi() {
      const response = await fetch(url)
        .then(first => first.json())
        .then(dat => setData(dat["items"]["sections"]))
    }
    fetchApi()
    console.log(data)
  }, [])*/

  return (
    <div id='visual'>
      {data.map(section => {
        return (
          <div className='section-container'>
            <SectionTitle />
            <Subsection section={section.name} />
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    data: {...state.items}
  }
}

const mapDispatchToProps = state => {
  return {
    data: fetchData()
  }
}

//xport default Main

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
