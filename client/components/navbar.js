import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div id="nav">
    <div id="left-nav" className="no-blue">
      <Link to="/">Juliana Albano </Link>
    </div>
    <div id="right-nav" className="no-blue">
      <Link to="/about">ABOUT </Link>
      <Link to="/resume">RESUME </Link>
      <Link to="/projects">PROJECTS </Link>
      <Link to="/contact">CONTACT </Link>
    </div>
  </div>
)

export default Navbar
