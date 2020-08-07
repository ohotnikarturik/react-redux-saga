import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, SHOW_ALERT, HIDE_LOADER, HIDE_ALERT, REQUEST_POSTS } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  }
}

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  }
}

export const showAlert = (message) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: message
    })
    
    setTimeout(() => {
      dispatch(hideAlert())
    },3000)
  }
}

export const hideAlert = () => {
  return {
    type: HIDE_ALERT
  }
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  }
  
  /*return async dispatch => {
    try {
      dispatch(showLoader())
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      const json = await response.json()
      setTimeout(( )=> {
        dispatch({ type: FETCH_POSTS, payload: json })
        dispatch(hideLoader())
      },500)
    } catch(e) {
      dispatch(showAlert('Something went wrong'))
      dispatch(hideLoader())
    }
  }*/
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