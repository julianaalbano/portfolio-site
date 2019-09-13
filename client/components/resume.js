import React from 'react'

const Resume = () => {
  return (
    <div id="resume-container">
      <a
        type="button"
        id="resume-download"
        href="https://www.dropbox.com/s/ak89ef303dzgd1s/Juliana.Albano-Resume.pdf?dl=0"
        target="_blank"
      >
        Download Resume
      </a>
      <div id="skills-container">
        <p className="skills-titles">Proficient Skills:</p>
        <p className="skills">
          JavaScript, Node, Express, React, Redux, Git, Sequelize, GitHub,
          PostgreSQL, HTML, CSS
        </p>
        <br />
        <br />
        <p className="skills-titles" id="familiar-skills">
          Familiar Skills:
        </p>
        <p className="skills">
          Socket.IO, PoseNet, IBM Watson, Web Speech API, RecordRTC, SQL,
          jQuery, Ruby, Firebase Storage, Jasmine, Chai, CanvasJS, Heroku,
          Webpack
        </p>
      </div>
    </div>
  )
}

export default Resume
