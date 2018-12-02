import {
    FETCH_POSTS_DETAIL_BEGIN,
    FETCH_POSTS_DETAIL_SUCCESS,
    FETCH_POSTS_DETAIL_FAILURE
} from '../actions'

const initialState = {
    fetching: false,
    post: null,
    error: null
  };
  
  export function fetchDetailPost(state = initialState, action) {
    switch (action.type) {
      case FETCH_POSTS_DETAIL_BEGIN:
        return { ...state, fetching: true, error: null };
      case FETCH_POSTS_DETAIL_SUCCESS:
        return { ...state, fetching: false, post: action.post};
      case FETCH_POSTS_DETAIL_FAILURE:
        return { ...state, fetching: false, post: null, error: action.error };
      default:
        return state;
    }
  }