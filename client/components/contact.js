import React from 'react'

const Contact = () => {
  return (
    <div id="contact-container">
      <p id="contact-title">Let's Connect!</p>

      <div id="contact-details">
        <p>Email: julianaalbano.us@gmail.com</p>
        <p>Phone: 425-870-3763</p>
        <p>Location: Seattle, WA &hearts;</p>
      </div>
      <a href="https://www.linkedin.com/in/julianaalbano/" target="_blank">
        <img
          className="transparent-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
        />
      </a>
      <a href="https://github.com/julianaalbano" target="_blank">
        <img
          className="transparent-logo"
          src="https://i.pinimg.com/originals/14/cf/b4/14cfb4df2ad5ee9f0b587214b0badd4c.png"
        />
      </a>
      <br />
      <img
        id="seattle"
        src="https://i.pinimg.com/originals/7c/f1/db/7cf1db8b8f61af3cfafa57732c45fb46.png"
      />
    </div>
  )
}

export default Contact
