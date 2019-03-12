import React from 'react';
import { Router, Route } from 'react-router-dom';
import UploadImage from './containers/UploadImage';
import createHistory from 'history/createBrowserHistory'
import Login from './containers/Login'

const history = createHistory();

function AppRouter() {
  return (
    <Router history={history}>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/upload_image" exact component={UploadImage} />
      </div>
    </Router>
  )
}

export default AppRouter;

