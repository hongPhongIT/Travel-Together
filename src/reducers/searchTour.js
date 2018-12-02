import {
    SEARCH_TOUR_BEGIN,
    SEARCH_TOUR_SUCCESS,
    SEARCH_TOUR_FAILURE
} from '../actions'

const initialState = {
    fetching: false,
    packages: null,
    error: null
};

export function searchTour(state = initialState, action) {

    switch (action.type) {
        case SEARCH_TOUR_BEGIN:
            return { ...state, fetching: true, error: null };
        case SEARCH_TOUR_SUCCESS:
            return { ...state, fetching: false, packages: action.packages, error: null };
        case SEARCH_TOUR_FAILURE:
            return { ...state, fetching: false, packages: null, error: action.error };
        default:
            return state;
    }
}