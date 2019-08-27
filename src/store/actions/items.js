import { REQUEST_ITEMS, RECEIVE_ITEMS, FILTER_ITEMS, ERROR_ITEMS } from './actionTypes'
import { addItem, getItems } from '../../api/items'

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

export const filterItems = () => ({
    type: FILTER_ITEMS
})

export const fetchItems = () => (dispatch) => {
    dispatch(requestItems())
    getItems()
    .then((response) => dispatch(receiveItems(Object.values(response.data))))
    .catch((error) => dispatch(catchErrorItems(error)))
}
