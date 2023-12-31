import { Link } from 'react-scroll'
import { useEffect, useRef } from 'react'
function Navbar() {
    const navbar = useRef(null);
    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 20 ? navbar.current.classList.add('shadow-sm')
                : navbar.current.classList.remove('shadow-sm');
        }
        window.addEventListener('scroll', onScroll)

        let i = document.querySelectorAll('.navbar-nav .nav-item');
        let toggler = document.querySelector('.navbar-collapse');
        i.forEach(item => {
            item.addEventListener('click', () => {
                toggler.classList.remove('show');
            })
        })

        return () => window.removeEventListener('scroll', onScroll);
    }, [])
    return (
        <nav ref={navbar} className='navbar navbar-expand-lg sticky-top navbar-light px-lg-5 px-sm-3 px-2 py-2 z-1'>
            <div className='container-fluid'>
                <img src={require('../Assets/logo.png')} className='navbar-brand' alt='brand' />
                <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#sandwich'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='navbar-collapse collapse' id='sandwich'>
                    <ul className='navbar-nav ms-auto gap-2 mt-2 mt-lg-0 align-items-center'>
                        <li className='nav-item'>
                            <Link to='banner'
                                className='nav-link'
                                activeClass='activeLink'
                                spy={true}
                                smooth={true}
                                duration={200}
                                offset={-100}
                            >Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='about'
                                className='nav-link'
                                activeClass='activeLink'
                                spy={true}
                                smooth={true}
                                duration={200}
                                offset={-100}
                            >About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='projects'
                                className='nav-link'
                                activeClass='activeLink'
                                spy={true}
                                smooth={true}
                                duration={200}
                                offset={-100}
                            >Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='contact'
                                className='nav-link'
                                activeClass='activeLink'
                                spy={true}
                                smooth={true}
                                duration={200}
                                offset={-100}
                            >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar