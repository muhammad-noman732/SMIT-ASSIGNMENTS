import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostItem from './PostItem';

const PostLists = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
 
//   for pagination 
           const [page, setPage] = useState(1); // always start from page 1 not 0
           const [limit] = useState(10); // Items per page 
           const [totalPages, setTotalPages] = useState(0); // total pages
            const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

 

const fetchPerPage =async ()=>{
  try {
      setLoading(true);
      const skip = (page -1) * limit
      const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
      console.log("response " , response);
      const data = await response.json();
      setPosts(data.posts);
      setTotalPages(Math.ceil(data.total / limit))
      
  } catch (error) {
    setError(error);
    console.log("error" , error);  
  } finally {
    setLoading(false);
  }
       
}
 
      useEffect(() => {
            fetchPerPage();
        }, [limit , page]);
  

  return (

    <div className="px-4 md:px-20 py-6 bg-gray-100 min-h-screen">
      {loading && <p className="text-center text-gray-500">Loading posts...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <h1 className="text-xl font-bold mb-3">Posts Page {page}</h1>

      {posts.map((post) => (
             <PostItem key={post?.id }post= {post}/>
      ))}

      <div className="flex justify-center gap-3 mt-6">
  <button
   className='text-xl bg-gray-200  rounded-md px-3 py-2'
    disabled={page === 1}
    onClick={() => setPage((prev) => Math.max( prev - 1 , 1))}
  >
    Previous
  </button>

  <span>Page {page} of {totalPages}</span>

  <button
  className='text-xl bg-green-500 text-white  rounded-md px-3 py-1r'
    disabled={page === totalPages}
    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
  >
    Next
  </button>
</div>

     
    </div>
  );
};

export default PostLists;
