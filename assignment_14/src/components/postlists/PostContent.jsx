import React from 'react'
import { useNavigate } from 'react-router-dom';
const PostContent = ({post}) => {
    const navigate = useNavigate();
    const handleViewPost = (postId) => {
        navigate(`/posts/${postId}`);
      };
  return (
          
    <>
                 {/* Author info */}
          <div className="flex items-center gap-3 px-4 pt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="font-semibold text-sm text-gray-800">User {post.userId}</p>
          </div>

          {/* Post content */}
          <div
            onClick={() => {
              handleViewPost(post?.id);
            }}
            className="px-4 py-2 cursor-pointer"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{post?.title}</h2>
            <p className="text-sm text-gray-600">{post?.body}</p>
          </div>

          {/* Post image */}
          <img
            className="w-full h-64 object-cover"
            src="https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=faoiFapQkhucuLuor9gBnblJ4KJpqvEgariqalvzRas="
            alt="post"
          />
</>
  )
}

export default PostContent
