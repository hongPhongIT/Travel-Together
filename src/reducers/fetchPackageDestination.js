import {
  FETCH_PACKAGE_DESTINATION_BEGIN,
  FETCH_PACKAGE_DESTINATION_SUCCESS,
  FETCH_PACKAGE_DESTINATION_FAILURE
} from '../actions'

const initialState = {
  fetching: false,
  packages: null,
  error: null
};

export function fetchPackageDestination(state = initialState, action) {
  switch (action.type) {
    case FETCH_PACKAGE_DESTINATION_BEGIN:
      return { ...state, fetching: true, error: null };
    case FETCH_PACKAGE_DESTINATION_SUCCESS:
      let packages = action.packages.filter(item => item.placeID === +action.id)
      return { ...state, fetching: false, packages: packages };
    case FETCH_PACKAGE_DESTINATION_FAILURE:
      return { ...state, fetching: false, packages: null, error: action.error };
    default:
      return state;
  }
}