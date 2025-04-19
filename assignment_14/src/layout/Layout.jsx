import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import SideBar from '../components/sidebar/SideBar';

const Layout = () => {
  return (
    <>
      {/* Fixed Top Navbar */}
      <Navbar />

      {/* Sidebar and Content Container */}
      <div className="flex w-full pt-16">
        {/* Sidebar - hidden on small screens, fixed on medium+ */}
        <div className="hidden md:block fixed top-16 left-0 w-[350px] h-screen overflow-y-auto bg-white border-r">
          <SideBar />
        </div>

        {/* Main Content - full width on small screens, offset on medium+ */}
        <main className="flex-1 p-4 min-h-screen bg-gray-100 md:ml-[360px]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const PostLists = () => {
//   const [posts, setPosts] = useState([]);
//   const [commentMap, setComentMap] = useState({});
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   // const [showComments , setShowComments] = useState(false);
//   const [comment , setComment] = useState("")

//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('https://dummyjson.com/posts');
//       const data = await response.json();
//       setPosts(data.posts);
//       setError(null);
//     } catch (error) {
//       setError(error.toString());
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchComments = async (id) => {
//     try {
//       setLoading(true);
//       const response = await fetch(`https://dummyjson.com/posts/${id}/comments`);
//       const data = await response.json();
//       setComentMap((prev) => ({
//         ...prev,
//         [id]: data.comments,
//       }));
//       setError(null);
//     } catch (error) {
//       setError(error.toString());
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const addNewComment = async (postId) => {
//     try {
//       const response = await fetch(`https://dummyjson.com/comments/add`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           body: comment,
//           postId: postId,
//           userId: 5
//         })
//       });
//       const data = await response.json();
//       console.log(data);
//       setComentMap(prev=>({
//         ...prev,
//         [postId]: [...(prev[postId] ||[]) , data]
//     }))
  
//       setComment("")
//     } catch (error) {
//       console.log("error , error");
//       setError(error)
      
//     }

//   }

//   const handleViewPost = (postId) => {
//     navigate(`/posts/${postId}`);
//   };

//   return (
//     <div className="px-4 md:px-20 py-6 bg-gray-100 min-h-screen">
//       {loading && <p className="text-center text-gray-500">Loading posts...</p>}
//       {error && <p className="text-red-500 text-center">{error}</p>}

//       {posts.map((post) => (
//         <div
//           key={post?.id}
//           className="bg-white shadow-md rounded-xl mb-6 overflow-hidden border border-gray-200"
//         >
//           {/* Author info */}
//           <div className="flex items-center gap-3 px-4 pt-4">
//             <img
//               src="https://randomuser.me/api/portraits/men/75.jpg"
//               alt="profile"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <p className="font-semibold text-sm text-gray-800">User {post.userId}</p>
//           </div>

//           {/* Post content */}
//           <div
//             onClick={() => {
//               handleViewPost(post?.id);
//             }}
//             className="px-4 py-2 cursor-pointer"
//           >
//             <h2 className="text-lg font-semibold text-gray-800 mb-1">{post?.title}</h2>
//             <p className="text-sm text-gray-600">{post?.body}</p>
//           </div>

//           {/* Post image */}
//           <img
//             className="w-full h-64 object-cover"
//             src="https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=faoiFapQkhucuLuor9gBnblJ4KJpqvEgariqalvzRas="
//             alt="post"
//           />

//           {/* Footer actions */}
//           <div className="px-4 py-3 border-t text-sm text-gray-600">
//             <div className="flex justify-between items-center mb-2">
//               <p className="hover:text-blue-600 cursor-pointer transition">👍 Likes: {post.reactions?.likes}</p>
//               <p
//                 onClick={() => fetchComments(post?.id)}
//                 className="hover:text-blue-600 cursor-pointer transition"
//               >
//                 💬 Comments
//               </p>
//               <p className="hover:text-blue-600 cursor-pointer transition">📤 Share</p>
//             </div>

//             {/* Comments */}

//             {commentMap[post.id]?.length > 0 && (
//               <div className="space-y-3 mt-4">
//                 {commentMap[post.id].map((comment) => (
//                   <div key={comment.id} className="flex items-start gap-3">
//                     <img
//                       src={`https://randomuser.me/api/portraits/lego/${comment.id % 10}.jpg`}
//                       alt="avatar"
//                       className="w-8 h-8 rounded-full object-cover"
//                     />
//                     <div className="bg-gray-100 px-4 py-2 rounded-xl max-w-xl">
//                       <p className="text-sm font-semibold text-gray-800">{comment.user.username}</p>
//                       <p className="text-sm text-gray-700">{comment.body}</p>
//                     </div>
//                   </div>
//                 ))}
//                 <div className='flex justify-between'>
//                  <input className='py-1 px-1 border-none mr-1.5' type="text"   placeholder='enter a comment' onChange={(e)=> setComment(e.target.value)}/>
//                  <button className='bg-green-600 text-1xl text-white border-none rounded-md py-1 px-2  hover:bg-green-900 transition' onClick={()=> {addNewComment(post.id)}}>Add comment</button>
//                   </div>
//                  </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PostLists;
