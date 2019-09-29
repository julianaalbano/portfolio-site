import React from 'react'

const Resume = () => {
  return (
    <div id="resume-container">
      <a
        type="button"
        id="resume-download"
        href="/JulianaAlbano-Resume.pdf"
        // href="https://www.dropbox.com/s/ak89ef303dzgd1s/Juliana.Albano-Resume.pdf?dl=0"
        target="_blank"
      >
        View Resume
      </a>
      <div id="skills-container">
        <p className="skills-titles">Proficient Skills</p>
        <div className="proficient-details">
          <p>JavaScript</p>
          <p>Node</p>
          <p>Express</p>
          <p>React</p>
          <p>Redux</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>PostgreSQL</p>
          <p>Sequelize</p>
          <p>Git</p>
          <p>GitHub</p>
          <p>Heroku</p>
          <p>Webpack</p>
          <p>Socket.IO</p>
          <p>Web Speech API</p>
          <p>RecordRTC</p>
        </div>
        <p className="skills-titles">Familiar Skills</p>
        <div id="familiar-skills" className="proficient-details">
          <p>TensorFlow</p>
          <p>IBM Watson</p>
          <p>SQL</p>
          <p>Ruby</p>
          <p>Firebase Storage</p>
          <p>Jasmine</p>
          <p>Chai</p>
          <p>CanvasJS</p>
        </div>
      </div>
    </div>
  )
}

export default Resume
