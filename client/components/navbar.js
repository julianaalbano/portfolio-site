import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div id="nav">
    <div id="left-nav" className="no-blue">
      <Link to="/" id="hover-gold">
        Juliana Albano
      </Link>
    </div>
    <div id="right-nav" className="no-blue">
      <Link to="/about" id="hover-gold">
        ABOUT
      </Link>
      <Link to="/resume" id="hover-gold">
        RESUME
      </Link>
      <Link to="/projects" id="hover-gold">
        PROJECTS
      </Link>
      <Link to="/contact" id="hover-gold">
        CONTACT
      </Link>
    </div>
  </div>
)

export default Navbar
