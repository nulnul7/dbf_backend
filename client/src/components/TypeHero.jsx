import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const TypeWrapper = styled.div`
    margin: 0 5% 35px 0;
    padding-left: 15%;
    font-size: 0.9em;
`

const TypeHero = ({getType, dudul, ptype}) => {
  return (
    <TypeWrapper>
        <ul>
            <li onClick={getType}>
                <Link to='' className={`sideMenu ${dudul}`}>{ptype}</Link> 
            </li>
        </ul>
    </TypeWrapper>
  )
}

export default TypeHero

