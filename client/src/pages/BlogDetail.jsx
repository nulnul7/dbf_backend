import React, {useContext} from 'react'
import styled from 'styled-components'
import {Context} from '../context'

const BlogContainer = styled.div`
    margin: 70px auto 0 auto;
    width: 80vw;
`
const BlogImage = styled.img`
    width: 100%;
    height: 270px;
`
const BlogContent = styled.div`
    display: flex;
    width: 100%;
    margin-top: 35px;
`
const BlogLink = styled.div`
    width: 30%;
    display: inline-block;
    text-align: center;
`
const BlogText = styled.div`
    width: 70%;
    font-weight: 400;
`

const BlogDetail = () => {
    const context = useContext(Context)
    const { blogDetailItem } = context;
    const {images, title, content} = blogDetailItem;
    
  return (
    <BlogContainer>
        <BlogImage src={`${images}`} />
        <BlogContent>
            <BlogLink>
                <h4>content 1</h4>
                <h4>content 2</h4>
                <h4>content 3</h4>
            </BlogLink>
            <BlogText>
                <h2>{title}</h2>
                <h4 
                    style={{fontWeight:'400', marginTop:'25px'}}
                >{content}</h4>
            </BlogText>
        </BlogContent>
    </BlogContainer>
  )
}

export default BlogDetail