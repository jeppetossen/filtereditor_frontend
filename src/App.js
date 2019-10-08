import React from 'react'
import './App.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'

function App () {
  return (
    <main className='App'>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </main>
  )
}

export default App
