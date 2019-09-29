import React from 'react'

const Home = () => {
  return (
    <div id="home-container">
      <br />
      <div className="animation-left">
        <p id="home-title">Hi there!</p>
      </div>
      <p id="home-name">I'm Juliana Albano.</p>
      <br />
      <div className="animation-right">
        <p className="home-p">
          Software Engineer | Web Developer | Lifelong Learner
        </p>
      </div>
      <br />
      <p id="location">
        Seattle, WA <span id="heart"> &hearts;</span>
      </p>
    </div>
  )
}

export default Home
