import React from 'react'

function Socials() {
  return (
    <ul className='nav flex-column position-fixed gap-2 px-2 top-50 translate-middle-y rounded-end py-2 border shadow fs-5 socials' >
        <li className='nav-item'><a href='https://www.linkedin.com/in/indresh-chaudhary-446b11245/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a></li>
        <li className='nav-item'><a href='https://github.com/indresh963' target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i></a></li>
        <li className='nav-item'><a href='mailto:indreshchuadhary963@gmail.com' target='_blank' rel='noreferrer'><i className="fa-solid fa-envelope"></i></a></li>
        <li className='nav-item'><a href='https://wa.me/917905328316' target='_blank' rel='noreferrer'><i className="fa-brands fa-whatsapp"></i></a></li>
    </ul>
  )
}

export default Socials