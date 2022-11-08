import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FadeMenu() {
    const [selectmenu, setselectmenu] = useState(0);

    return (
        <div className='navContainer'>
            <ul ul className = 'menu' >
                    <li><Link to="/" className={selectmenu === 0 ? 'oce abdi' : 'oce'} onClick={() => setselectmenu(0)}>Home</Link></li>
                 <li><Link to="portfolio" className={selectmenu === 1 ? 'oce abdi' : 'oce'} onClick={() => setselectmenu(1)}>Portfolio</Link></li>
               <li><Link to='blog' className={selectmenu === 2 ? 'oce abdi' : 'oce'} onClick={() => setselectmenu(2)}>Blog</Link></li>
              </ul>
        </div>
    );
}
