import React from 'react'

const projects = [
  {
    name: 'The Movies App',
    description: 'Discover a dynamic movie and TV show search experience with our TMDB clone project. Seamlessly harnessing API endpoints, our app offers robust functionalities like filters, search, video playback, image sliders, and full responsiveness.',
    duration: '35 Days',
    img: require('../Assets/theMoviesApp.png'),
    url: 'https://indresh963.github.io/theMoviesApp',
    techStacks: ['ReactJs', 'Bootstrap', 'CSS', 'version control']
  },
  {
    name: 'Little Lemon',
    description: 'Highly interactive and fully responsive food ordering website with features such as login, signup, cart,menu and table booking',
    duration: '26 Days',
    img: require('../Assets/littleLemon.png'),
    url: 'https://indresh963.github.io/little-lemon',
    techStacks: ['ReactJs', 'Bootstrap', 'CSS', 'version control']
  },
  {
    name: 'Digital Clock',
    description: 'Digital clock with features such as timer and stopwatch with flag feature (Not responsive)',
    duration: '5 Days',
    img: require('../Assets/digitalClock.png'),
    url: 'https://indresh963.github.io/clock/',
    techStacks: ['Vanilla JS', 'Bootstrap', 'CSS', 'version control']
  },
  {
    name: 'Weather App',
    description: 'Displaying real time weather data using Javascript Fetch API and geolocation API ',
    duration: '3 Days',
    img: require('../Assets/weatherApp.png'),
    url: 'https://indresh963.github.io/weatherApp',
    techStacks: ['ReactJs', 'Bootstrap', 'version control']
  }
]
function Projects() {
  return (
    <section id='projects'>
      <div className='container-fluid my-5'>
        <div className='row justify-content-center'>
          <div className='col-10'>
            <h4>Projects</h4>
            <div className='mt-5 container-fluid d-flex flex-column gap-4'>
              {
                projects.map((project, index) => (
                  <div data-aos={index%2 === 0 ? 'fade-right' : 'fade-left'} key={project.name} className='row gap-sm-0 gap-3 align-items-center shadow-sm  project-container'>
                    <div className='col-lg-4 col-sm-6 col-12'>
                      <img src={project.img} className='img-fluid rounded-2 border' alt='project-1' />
                    </div>
                    <div className='col-lg-8 col-sm-6 col-12'>
                      <p className='project-name'>{project.name}</p>
                      <p className='description'>{project.description}</p>
                      <p className='duration'><span className='project-icon'><i className="fa-regular fa-clock"></i></span> : {project.duration}</p>
                      <p className='techStacks'><span className='project-icon'><i className="fa-solid fa-screwdriver-wrench"></i></span> : {
                        project.techStacks.map(item=> `${item} `)
                      }</p>
                      <a href={project.url} className='main-btn mt-2' rel='noreferrer' target='_blank'>
                        View Project <span className='ms-1'>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects