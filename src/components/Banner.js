import React from 'react'

function Banner() {
  return (
    <section id='banner'>
      <div className='container-fluid my-4'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-6 col-10 mb-md-0 mb-4' data-aos='fade-right'
            data-aos-offset='300' data-aos-duration='1000'>
            <h3> &lt; &gt; Hi there ! &lt; / &gt;</h3>
            <h1>I am a Frontend Web Developer</h1>
            <h5> Passionate about crafting engaging and user-friendly web experiences
              with clean code and stunning design.
              <span id='highlight'> Let's build something amazing together.</span>
            </h5>
            <ul className='list-unstyled d-flex fs-3 gap-sm-4 gap-3'>
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
                <i class="fa-brands fa-bootstrap"></i>
              </li>
            </ul>
            <a href='https://drive.google.com/file/d/1k-vXSIxKnI3Qm2omGX5yFsRLo2xkrqan/view?usp=sharing'
              className='main-btn text-decoration-none d-inline-block' target='_blank'>View Resume</a>
          </div>
          <div className='col-md-4 col-8 text-center'>
            <img src={require('../Assets/banner.jpg')} alt='banner' className='img-fluid' data-aos='fade-left'
              data-aos-offset='300' data-aos-delay='1000' data-aos-duration='1000' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner