import React from 'react';
import { Router as BrowserRouter, Route } from 'react-router-dom';
import UploadImage from './containers/UploadImage';
import createHistory from 'history/createBrowserHistory'
import Login from './containers/Login'
import PageHeader from './components/Header';

const history = createHistory();

function Router() {
  return (
    <BrowserRouter history={history}>
      <div>
        <PageHeader history={history} />
        <Route path="/" exact component={Login} />
        <Route path="/upload-image" exact component={UploadImage} />
      </div>
    </BrowserRouter>
  );
}

export default Router;
