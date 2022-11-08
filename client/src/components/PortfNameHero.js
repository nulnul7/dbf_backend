import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PortfolioNameWrapper = styled.div`
    font-size: 1.2em;
    width: 25vw;

`

function PortfNameHero({pname, getPortfolioDetail, overData, slug}) {
    return (
            <PortfolioNameWrapper>
                <ul>
                    <li style={{marginBottom:'35px', cursor:'pointer'}}>
                        <Link  
                        to={`${slug}`}
                        className='portf' 
                        onClick={getPortfolioDetail}
                        onMouseOver={overData}>
                            {pname} 
                        </Link>
                    </li>
                </ul>
            </PortfolioNameWrapper>
    )
}

// function PortfNameHero({pname, getPortfolioDetail, overData, slug}) {
//     return (
//             <PortfolioNameWrapper>
//                 <ul>
//                     <li style={{marginBottom:'35px', cursor:'pointer'}}>
//                         <Link 
//                         to={`${slug}`}
//                         className='portf' 
//                         onClick={getPortfolioDetail}
//                         onMouseOver={overData}>
//                             {pname} 
//                         </Link>
//                     </li>
//                 </ul>
//             </PortfolioNameWrapper>
//     )
// }

export default PortfNameHero
