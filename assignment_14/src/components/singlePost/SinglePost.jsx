import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePost = () => {
    const { id } = useParams();
    const [post , setPost] = useState({});
  
    const getPostById = async()=>{
         try {
        const respone = await fetch (`https://dummyjson.com/posts/${id}`)
        console.log("response" , respone);
        const data = await respone.json();
        console.log("data" , data);
        setPost(data);
      } catch (error) {
        console.log("error" , error);
      }
    }

    useEffect(()=>{
            if (id){
            getPostById();
        }

    },[id])

  return (
    <div className=" px-20">
        <div
          key={post?.id}
          className="bg-white shadow-md rounded-xl mb-6 overflow-hidden border border-gray-200"
        >
          {/* Author info (optional placeholder) */}
          <div className="flex items-center gap-3 px-4 pt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="font-semibold text-sm text-gray-800">User {post.userId}</p>
          </div>

          {/* Post content */}

         <div className="px-4 py-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{post?.title}</h2>
            <p className="text-sm text-gray-600">{post?.body}</p>
          </div>

          {/* Post image */}
          <img
            className="w-full h-64 object-cover"
            src="https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=faoiFapQkhucuLuor9gBnblJ4KJpqvEgariqalvzRas="
            alt="post"
          />

          {/* Footer actions */}
          <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-500">
            <p className="hover:text-blue-600 cursor-pointer">Like</p>
            <p className="hover:text-blue-600 cursor-pointer">Comments</p>
            <p className="hover:text-blue-600 cursor-pointer">Share</p>
          </div>
        </div>
    </div>
  
  )
}

export default SinglePost
