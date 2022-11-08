import React from 'react'
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu'

function Navbar() {
    return (
        <nav className='navigation'>
            <label className='logo'><Link to="/" className='logoDbf'>5R2I</Link></label>
            <NavMenu />
        </nav  >
    )
}

export default Navbar


