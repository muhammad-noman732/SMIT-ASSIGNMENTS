import React, { useState } from 'react';

const PostFooter = ({ post }) => {
  const [commentMap, setComentMap] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");

  const fetchComments = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/posts/${id}/comments`);
      const data = await response.json();
      setComentMap((prev) => ({
        ...prev,
        [id]: data.comments,
      }));
      setError(null);
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  };

  const addNewComment = async (postId) => {
    try {
      const response = await fetch(`https://dummyjson.com/comments/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          body: comment,
          postId: postId,
          userId: 5
        })
      });
      const data = await response.json();
      console.log(data);
      setComentMap(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), data]
      }));
      setComment("");
    } catch (error) {
      console.log("error", error);
      setError(error);
    }
  };

  return (
    <div className="px-4 py-3 border-t text-sm text-gray-600">
      <div className="flex justify-between items-center mb-2">
        <p className="hover:text-blue-600 cursor-pointer transition">👍 Likes: {post.reactions?.likes}</p>
        <p
          onClick={() => {
            fetchComments(post?.id);
            setShowComments(!showComments);
          }}
          className="hover:text-blue-600 cursor-pointer transition"
        >
          💬 Comments
        </p>
        <p className="hover:text-blue-600 cursor-pointer transition">📤 Share</p>
      </div>

      {/* Comments */}
      {showComments && commentMap[post.id]?.length > 0 && (
        <div className="space-y-3 mt-4">
          {commentMap[post.id].map((comment) => (
            <div key={comment.id} className="flex items-start gap-3">
              <img
                src={`https://randomuser.me/api/portraits/lego/${comment.id % 10}.jpg`}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="bg-gray-100 px-4 py-2 rounded-xl max-w-xl">
                <p className="text-sm font-semibold text-gray-800">{comment.user.username}</p>
                <p className="text-sm text-gray-700">{comment.body}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <input
              className="py-1 px-1 border border-gray-300 rounded mr-1.5"
              type="text"
              placeholder="Enter a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="bg-green-600 text-white border-none rounded-md py-1 px-2 hover:bg-green-900 transition"
              onClick={() => addNewComment(post.id)}
            >
              Add comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostFooter;
