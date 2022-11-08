import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Skills from '../components/Skills'


function Home() {
    const [status, setStatus] = useState(true)
    const result = status ? <About /> : <Skills />
    return (
        <div className='mainContent'>
            <div className='homeWrapper'>
                <ul className='leftLink'>
                    <li><Link className={status ? 'sideMenu active' : 'sideMenu'} to="" onClick={() => setStatus(true)}>About Me</Link></li>
                    <li><Link className={status ? 'sideMenu' : 'sideMenu active'} to='' onClick={() => setStatus(false)}>Skills</Link></li>
                </ul>
                <div className='content'>
                    {result}
                </div>
            </div>
        </div>
    )
}

export default Home
