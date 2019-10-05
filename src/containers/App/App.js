import React, { useLayoutEffect, useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://0.0.0.0:8000/api/headers/?format=json')
      //if (data === null) {
      setData(res.data.json())
      //}
    }
    fetchData()
  })

  return (
    <div>
      {console.log(data)}
      {data.map(item => {
        return item
      })}
    </div>
  ) 
}

export default App
