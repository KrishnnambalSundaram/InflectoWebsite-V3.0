import React from 'react'
import HeroBlog from '../components/blog/HeroBlog'
import RecentBlog from '../components/blog/RecentBlog'
import AllBlogs from '../components/blog/AllBlogs'

const Blog = () => {
  return (
    <div className='flex flex-col'>
        <HeroBlog/>
        <RecentBlog/>
        <AllBlogs/>
    </div>
  )
}

export default Blog