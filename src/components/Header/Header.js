import React from 'react'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import './Header.css'

/* function Index() {
    return <h2>Home</h2>
}

function Storage() {
    return <h2>Storage</h2>
}

function About() {
    return <h2>About</h2>
} */

function Header () {
  return (
    <header>
      <h1>Yet Another Filter Editor</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about/'>About</Link>
            </li>
            <li>
              <Link to='/users/'>Users</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </header>
  )
}

export default Header
