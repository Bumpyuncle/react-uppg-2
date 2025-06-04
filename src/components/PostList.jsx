import React from 'react';
import Post from './Post';
import '../styles/PostList.css';

function PostList() {
  return (
   <div className="postlist-container">


      <Post />  
      <Post />
      <Post />
    </div>
  );
}

export default PostList;
