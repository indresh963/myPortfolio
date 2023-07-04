import React from 'react'

function About() {
  return (
    <section id='about'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-10 p-4 data-container'>
          <h4 className='heading'>About me</h4>
            <div className='row justify-content-lg-between justify-content-center align-items-center mt-4 gap-3'>
              <div className='col-lg-2 col-md-3 col-sm-4 col-6'>
                <img src={require('../Assets/user.jfif')} alt='profile' id='my-img' className='img-fluid rounded-circle shadow' data-aos='zoom-in'/>
              </div>
              <div className=' col-lg-9 col-11' id='bio' data-aos='zoom-out'>
                <p className='fw-bold fs-5 mb-2' id='name'>Indresh Chaudhary</p>
                <p>A frontend developer specializing in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JAVASCRIPT</strong>, <strong>REACT</strong>, <strong>REDUX</strong>, and <strong>BOOTSTRAP</strong>. I am passionate about creating intuitive and visually appealing web experiences. With a strong eye for design and technical expertise, I am dedicated to delivering high-quality solutions and thrive in collaborative environments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About