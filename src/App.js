import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/storeConfig/configureStore'


import Home from './store/containers/Home'
import Messages from './components/Messages'
import WishList from './components/WishList'
import Settings from './components/Settings'
import Profile from './components/Profile'

function Routes() {
  return <>
    <Route exact path="/" component={Home} />
    <Route exact path="/messages" component={Messages} />
    <Route exact path="/wishlist" component={WishList} />
    <Route exact path="/settings" component={Settings} />
    <Route exact path="/profile" component={Profile} />
  </>
}

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
