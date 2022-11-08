import React from 'react'
import IconInsta from '../assets/icon-instagram.svg'
import IconFB from '../assets/icon-fb.svg'
import IconDribble from '../assets/icon-dribble.svg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='sosmed'>
            <ul>
                <li><Link to='www.instagram.com'><img src={IconInsta} alt="icon" className='icons' /></Link></li>
                <li><Link to='www.facebook.com'><img src={IconFB} alt="icon" className='icons' /></Link></li>
                <li><Link to='www.dribble.com'><img src={IconDribble} alt="icon" className='icons' /></Link></li>
            </ul>
        </div>
    )
}

export default Footer
