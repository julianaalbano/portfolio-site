import React from 'react'

const Projects = () => {
  return (
    <div id="project-container">
      <p id="project-container-title">Project Portfolio</p>
      <div id="speakgood" className="project">
        <div className="photo-description">
          <img src="/final-speakgood-final.png" className="project-img" />
          <div className="description-details">
            <h6 className="description-title" id="speakgood-title">
              <strong>SpeakGood</strong>
            </h6>
            <p>
              <strong className="make-gold">Description:</strong> SpeakGood is a
              web application with the goal to support users in becoming better
              interviewers and public speakers. SpeakGood records a user’s pitch
              or presentation, and gives feedback to the user about the number
              of filler words they used (such as: like, you know, so, etc.),
              along with a transcript of their recording with their filler words
              highlighted. SpeakGood also guides users in a "power pose" before
              their big public speaking moment. This was a group project - and I
              specifically created the speech-to-text functionality that counts
              the number of filler words and compiles a transcript for the user,
              rendered the video/audio recording capabilities, created front-end
              React components, and wrote back-end express routes.
            </p>
            <p>
              <strong className="make-gold">Technologies Used:</strong>{' '}
              JavaScript, Node, Express, Sequelize, PostgreSQL, React, Redux,
              IBM-Watson, RecordRTC, Tensor Flow's PoseNet, HTML & CSS
            </p>
            <div id="speakgood-links">
              <p>
                <a href="https://speakgood.herokuapp.com/" target="_blank">
                  View Online
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/speak-good/speak-good"
                  target="_blank"
                >
                  View on GitHub
                </a>
              </p>
              <p id="overview-vid">
                <a
                  href="https://www.youtube.com/watch?v=d7WIUndCht4&list=PLx0iOsdUOUmnZXS2H9EDbhYMlmh3onWHs&index=3&t=0s"
                  target="_blank"
                >
                  Video Overview
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="gutcheck" className="project">
        <div className="photo-description">
          <img src="/final-gutcheck-final.png" className="project-img" />
          <div className="description-details">
            <h6 className="description-title" id="gutcheck-title">
              <strong>GutCheck</strong>
            </h6>
            <p>
              <strong className="make-gold">Description:</strong> GutCheck is a
              web application developed to support both students and teachers -
              it gives instructors instant data on how many students are
              understanding their lecture, and gives students the outlet to
              anonymously share that they aren't understanding the material.
              With this real-time data, instructors can adjust to the needs of
              their students by reviewing a slide or topic one more time if the
              majority of the class feels confused, or can continue forward if
              the majority of the class is feeling good about the material. I
              was the sole developer of this application.
            </p>
            <p>
              <strong className="make-gold">Technologies Used:</strong>{' '}
              JavaScript, Node, Socket.IO, Git, GitHub, HTML, CSS, CanvasJS,
              Moment.js, & DOM manipulation
            </p>
            <div className="media-links">
              <p>
                <a
                  href="https://gutcheck-stackathon.herokuapp.com/"
                  target="_blank"
                >
                  View Online
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/julianaalbano/GutCheck"
                  target="_blank"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="best-cupcakes" className="project">
        <div className="photo-description">
          <img src="/final-cupcake-final.png" className="project-img" />
          <div className="description-details">
            <h6 className="description-title" id="cupcakes-title">
              <strong>Best Cupcakes</strong>
            </h6>
            <p>
              <strong className="make-gold">Description:</strong> Best Cupcakes
              is a fully-functioning e-commerce application designed to sell
              cupcakes • With login and sign up capabilities, users and guests
              alike can shop their favorite cupcakes, add to their persistent
              carts, and check out their order. This was a group project - I
              specifically created front-end components and back-end routes to
              display inventory, the shopping cart, and checkout.
            </p>
            <p>
              <strong className="make-gold">Technologies Used:</strong>{' '}
              JavaScript, Node, Express, Sequelize, PostgreSQL, React, Redux,
              HTML, CSS
            </p>
            <div className="media-links">
              <p>
                <a
                  href="https://cupcake-shop-app.herokuapp.com/"
                  target="_blank"
                >
                  View Online
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/fantastic-four-grace-shopper/grace-shopper"
                  target="_blank"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
