// components/CommentForm.jsx
'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface CommentFormProps {
  postId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId }) => {
  const [commentContent, setCommentContent] = useState('');

  const handleCommentSubmit = async (e: any) => {
    e.preventDefault();
    try {
        toast.loading('Uploading Comment')
      const response = await fetch(`/api/comments/${postId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commentContent }),
      });
      toast.dismiss(); // Dismiss toast notification)
      const newComment = await response.json();
      toast.success('Comment created');
      setCommentContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleCommentSubmit} className="flex flex-wrap justify-center mb-4">
      <input
        type="text"
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        placeholder="Write a comment..."
        className="w-full p-2 pl-10 text-sm text-green-500 border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-gray-600 lg:w-3/4 md:w-3/4 sm:w-full"
      />
      <button
        type="submit"
        className=" lg:ml-4 px-4 py-2 text-sm font-medium text-white bg-green-500 border-green-bg-green-500 rounded-lg mt-4 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:opacity-50"
      >
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;