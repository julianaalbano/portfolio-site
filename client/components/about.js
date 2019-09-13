import React from 'react'
import {Link} from 'react-router-dom'

const About = () => (
  <div id="about">
    <p id="about-title">About Me</p>
    <div id="about-container">
      <img src="/headshot.png" />
      <div id="about-paragraph">
        <p>Little paragraph about me....</p>
      </div>
    </div>
  </div>
)

export default About
