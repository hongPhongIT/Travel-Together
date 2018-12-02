import {
    FETCH_DESTINATION_BEGIN,
    FETCH_DESTINATION_SUCCESS,
    FETCH_DESTINATION_FAILURE
} from '../actions'

const initialState = {
    fetching: false,
    destinations: null,
    error: null
  };
  
  export function fetchDestination(state = initialState, action) {
    switch (action.type) {
      case FETCH_DESTINATION_BEGIN:
        return { ...state, fetching: true, error: null };
      case FETCH_DESTINATION_SUCCESS:
        return { ...state, fetching: false, destinations: action.destinations };
      case FETCH_DESTINATION_FAILURE:
        return { ...state, fetching: false, destinations: null, error: action.error };
      default:
        return state;
    }
  }