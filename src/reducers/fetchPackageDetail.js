import {
    FETCH_PACKAGE_DETAIL_BEGIN,
    FETCH_PACKAGE_DETAIL_SUCCESS,
    FETCH_PACKAGE_DETAIL_FAILURE
} from '../actions'

const initialState = {
    fetching: false,
    package: null,
    error: null
  };
  
  export function fetchPackageDetail(state = initialState, action) {
    switch (action.type) {
      case FETCH_PACKAGE_DETAIL_BEGIN:
        return { ...state, fetching: true, error: null };
      case FETCH_PACKAGE_DETAIL_SUCCESS:
        return { ...state, fetching: false, package: action.packages};
      case FETCH_PACKAGE_DETAIL_FAILURE:
        return { ...state, fetching: false, package: null, error: action.error };
      default:
        return state;
    }
  }