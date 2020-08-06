import React from "react";
import Post from "./Post";
//connect react component with redux and makes from dumb component, smart:)
import { connect } from 'react-redux'

const Posts = ({syncPosts}) => {
  if (!syncPosts.length) {
    return <p className="text-center">Doesn't have Posts yet</p>
  }
  return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

//connect gets two parameters helpers functions
//converts the entire state to a props
const mapStateToProps = state => {
  return {
    syncPosts: state.posts.posts
  }
}
export default connect(mapStateToProps, null)(Posts)