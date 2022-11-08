import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// const BlogDate = styled.h5`
//     font-weight: 400;
// `
// const BlogCategory = styled.h5`
//     font-weight: 400;
// `
// const BlogTitle = styled.h2`
//     font-weight: 500;
//     padding-left: 10px;
// `
const BlogContent = styled.h5`
    font-weight: 400;
`

export const BlogFeed = ({
    date = '',
    category = '',
    title = '',
    glance = '',
    handleClick,
    slug,
    ...props
}) => {
    
  return (
    <Link to={`${slug}`}>
      <div className='blogContainer' onClick={handleClick}>
          <h5 style={{fontWeight:400}}>{date}</h5> 
          <h5 style={{fontWeight:400}}>{category}</h5>
          <h2 style={{fontWeight:500, paddingLeft:'10px'}}>{title}</h2>
          <BlogContent>{glance}</BlogContent>
      </div>
    </Link>
  )
}

