import { REQUEST_ITEMS, RECEIVE_ITEMS, ERROR_ITEMS } from './actionTypes'
import { getItems } from '../../api/items'

export const requestItems = () => ({
    type: REQUEST_ITEMS
})

export const receiveItems = (items) => ({
    type: RECEIVE_ITEMS,
    payload: items
})

export const catchErrorItems = (error) => ({
    type: ERROR_ITEMS,
    payload: error
})

export const fetchItems = () => (dispatch) => {
    dispatch(requestItems())
    getItems()
    .then((response) => dispatch(receiveItems(Object.values(response.data))))
    .catch((error) => dispatch(catchErrorItems(error)))
}
