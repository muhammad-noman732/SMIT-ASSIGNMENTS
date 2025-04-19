import React from 'react'
import PostContent from './PostContent'
import PostFooter from './PostFooter'

const PostItem = ({post}) => {
  return (
    <div className="bg-white shadow-md rounded-xl mb-6 overflow-hidden border border-gray-200">
      <PostContent  post={post}/>
      <PostFooter post={post}/>
    </div>
  )
}

export default PostItem
