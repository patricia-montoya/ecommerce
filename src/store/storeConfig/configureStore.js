import {createStore, compose, applyMiddleware } from 'redux'
import itemsReducer from '../reducers/items'
import thunk from 'redux-thunk'

export default () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(itemsReducer, {}, composeEnhancers(applyMiddleware(thunk)))
    return store
}