import {
    HANDLE_SUBMIT_FORM_ORDER_BEGIN,
    HANDLE_SUBMIT_FORM_ORDER_SUCCESS,
    HANDLE_SUBMIT_FORM_ORDER_FAILURE
} from '../actions'

const initialState = {
    response: null,
    success: false,
    error: null
};

export function addOrder(state = initialState, action) {
    switch (action.type) {
        case HANDLE_SUBMIT_FORM_ORDER_BEGIN:
            return { ...state, error: null, success: false };
        case HANDLE_SUBMIT_FORM_ORDER_SUCCESS:
            return { ...state, response: action.orders, success: true };
        case HANDLE_SUBMIT_FORM_ORDER_FAILURE:
            return { ...state, response: null, error: action.error, success: false };
        default:
            return state;
    }
}