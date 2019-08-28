import { REQUEST_ITEMS, RECEIVE_ITEMS, ERROR_ITEMS } from '../actions/actionTypes'
import initialState from'./initialState'

export default(state = initialState.items, action) => {
    switch(action.type) {
        case REQUEST_ITEMS:
            return {...state, isFetching: true}
        case RECEIVE_ITEMS:
            return {...state, isFetching: false, data: action.payload}
        case ERROR_ITEMS:
            return {...state, isFetching: false, error: action.payload}
        default:
            return state
    }
}