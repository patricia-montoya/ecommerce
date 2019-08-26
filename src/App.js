import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './views/Home'
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


function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
