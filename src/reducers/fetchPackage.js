import {
  FETCH_PACKAGE_BEGIN,
  FETCH_PACKAGE_SUCCESS,
  FETCH_PACKAGE_FAILURE
} from '../actions'

const initialState = {
  fetching: false,
  packages: null,
  error: null
};

export function fetchPackage(state = initialState, action) {
  switch (action.type) {
    case FETCH_PACKAGE_BEGIN:
      return { ...state, fetching: true, error: null };
    case FETCH_PACKAGE_SUCCESS:
      return { ...state, fetching: false, packages: action.packages };
    case FETCH_PACKAGE_FAILURE:
      return { ...state, fetching: false, packages: null, error: action.error };
    default:
      return state;
  }
}