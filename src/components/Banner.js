import React from 'react'

function Banner() {
  return (
    <section id='banner'>
      <div className='container-fluid mt-4 mb-5'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-6 col-10 mb-md-0 mb-4' data-aos='fade-right'>
            <h3> &lt; &gt; Hi there ! &lt; / &gt;</h3>
            <h1>I am a Frontend Web Developer</h1>
            <h5> Passionate about crafting engaging and user-friendly web experiences
              with clean code and stunning design.
              <span id='highlight'> Let's build something amazing together.</span>
            </h5>
            <ul className='list-unstyled d-flex fs-3 gap-sm-4 gap-3 flex-wrap'>
              <li className=' skills'>
                <i className="fa-brands fa-html5"></i>
              </li>
              <li className=' skills'>
                <i className="fa-brands fa-css3-alt"></i>
              </li>
              <li className=' skills'>
                <i className="fa-brands fa-square-js"></i>
              </li>
              <li className=' skills'>
                <i className="fa-brands fa-react"></i>
              </li>
              <li className=' skills'>
                <i className="fa-brands fa-github"></i>
              </li>
              <li className=' skills'>
                <i className="fa-brands fa-java"></i>
              </li>
              <li className=' skills'>
                <i className="fa-brands fa-bootstrap"></i>
              </li>
              <li className=' skills'>
                <i className="fa-brands fa-python"></i>
              </li>
            </ul>
            <a href='https://drive.google.com/file/d/12Aj091GF8piG5QY7hAf-f86VLYA-sNNt/view?usp=drive_link'
              className='main-btn' target='_blank' rel='noreferrer'>View Resume</a>
          </div>
          <div className='col-md-4 col-8 text-center'>
            <img src={require('../Assets/banner.jpg')} alt='banner' className='img-fluid' data-aos='fade-left'
              data-aos-delay='0' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner