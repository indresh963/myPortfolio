import { Link } from 'react-scroll'
function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg sticky-top navbar-light px-lg-5 px-sm-3 px-2 py-2'>
            <div className='container-fluid'>
                <img src={require('../Assets/logo.png')} className='navbar-brand' alt='brand' />
                <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#sandwich'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='navbar-collapse collapse' id='sandwich'>
                    <ul className='navbar-nav ms-auto gap-2 mt-2 mt-lg-0 align-items-center'>
                        <li className='nav-item'>
                            <a href='#home' className='nav-link activeLink'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#about' className='nav-link'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#projects' className='nav-link'>Projects</a>
                        </li>
                        <li className='nav-item'>
                            <a href='contact' className='nav-link'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar