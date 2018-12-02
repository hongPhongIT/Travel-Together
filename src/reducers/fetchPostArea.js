import {
    FETCH_POSTS_AREA_BEGIN,
    FETCH_POSTS_AREA_SUCCESS,
    FETCH_POSTS_AREA_FAILURE
} from '../actions'

const initialState = {
    fetching: false,
    posts: null,
    error: null
  };
  
  export function fetchPostArea(state = initialState, action) {
   
    switch (action.type) {
      case FETCH_POSTS_AREA_BEGIN:
        return { ...state, fetching: true, error: null };
      case FETCH_POSTS_AREA_SUCCESS:
        return { ...state, fetching: false, posts: action.posts };
      case FETCH_POSTS_AREA_FAILURE:
        return { ...state, fetching: false, posts: null, error: action.error };
      default:
        return state;
    }
  }