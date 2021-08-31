import React, { useState, useEffect} from 'react'
import { Button } from '../button/Button'
import { Link } from 'react-router-dom'
import vividLOGO from '../../images/LOGO.png'


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <=800) {
            setButton(false)
        }else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
        <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className="navbarLogo" onClick={closeMobileMenu}>
                <img src={vividLOGO} alt="LOGO" title="Discover Vibrant" />
            </Link>
        <div className='menuIcon' onClick={handleClick}>
        <i className={click? "fas fa-times" : "fas fa-bars"} />
        </div> 
        <ul className={click ? 'navMenu active' : 'navMenu'}>
            <li className="navItem">
                <Link to='/' className='navLinks' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className="navItem">
                <Link to='/product' className='navLinks' onClick={closeMobileMenu}>
                    Product
                </Link>
            </li>
            <li className="navItem">
                <Link to='/shop' className='navLinks' onClick={closeMobileMenu}>
                   Shop 
                </Link>
            </li>
            <li className="navItem">
                <Link to='/Cart' className='navLinks-mobile' onClick={closeMobileMenu}>
                   Cart
                </Link>
            </li>
        </ul>
        {button&& <Button buttonStyle='btn-outline'><i className="fas fa-cart-arrow-down" /></Button>}
        </div>
        </nav>
        </>
    )
}

export default Navbar
