import { CREATE_POST, FETCH_POSTS } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function fetchPosts() {
  
  return async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const json = await response.json()
    dispatch({ type: FETCH_POSTS, payload: json })
  }
}




// export function fetchPosts() {
//   return {
//     type: REQUEST_POSTS
//   }
//   // return async dispatch => {
//   //   try {
//   //     dispatch(showLoader())
//   //     const response = await fetch('ttps://jsonplaceholder.typicode.com/posts?_limit=5')
//   //     const json = await response.json()
//   //     setTimeout(() => {
//   //       dispatch({ type: FETCH_POSTS, payload: json })
//   //       dispatch(hideLoader())
//   //     }, 500)
//   //   } catch (e) {
//   //     dispatch(showAlert('Что-то пошло не так'))
//   //     dispatch(hideLoader())
//   //   }
//   // }
// }