import React from 'react';
import PostForm from "./components/PostForm";
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <h2>Post Form</h2>
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync Posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Async Posts</h2>
          <FetchedPosts posts={[]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
