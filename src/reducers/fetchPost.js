import {
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from '../actions'

const initialState = {
    fetching: false,
    posts: null,
    error: null
  };
  
  export function fetchPost(state = initialState, action) {
    switch (action.type) {
      case FETCH_POSTS_BEGIN:
        return { ...state, fetching: true, error: null };
      case FETCH_POSTS_SUCCESS:
        return { ...state, fetching: false, posts: action.posts };
      case FETCH_POSTS_FAILURE:
        return { ...state, fetching: false, posts: null, error: action.error };
      default:
        return state;
    }
  }