import React from 'react'

const Blog = () => {
  return (
    <div>Hello Blog</div>
  )
}

export default Blog
// import React, {useContext} from 'react'
// import styled from 'styled-components'
// import {BlogFeed} from '../components/BlogFeed'
// import {Context} from '../context'

// const BlogHeader = styled.h1`
//     font-weight: 500;
//     margin-bottom: 50px;
//     padding-bottom: 25px;
//     border-bottom: solid 1px greenyellow;
// `

// function Blog() {

//     const context = useContext(Context);
//     const {blogData, getBlogId} = context;

//     return (
//         <div className='blog'>
//             <BlogHeader>
//                 Simply thought or curiousity 
//             </BlogHeader>
//             {blogData.map(blog => {
//                 return(
//                     <BlogFeed 
//                         key={blog._id}
//                         date={blog.date} 
//                         category={blog.category}
//                         title={blog.title}
//                         glance={blog.glance}
//                         slug={blog.slug}
//                         handleClick={()=>getBlogId(blog._id)}
//                     />
//                 )
//             })}
//         </div>
//     )
// }

// export default Blog
