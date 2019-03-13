import React from 'react';
import { Router, Route } from 'react-router-dom';
import UploadImage from './containers/UploadImage';
import createHistory from 'history/createBrowserHistory'
import Login from './containers/Login'
import { Layout } from 'antd';
import { Button, Col } from 'antd';

const history = createHistory();

const LogOutButton = ({ history }) => {
  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    history.push('/');
  }
  if (localStorage.getItem('authToken')) {
    return (
      <Button
        type="primary ant-btn-round"
        style={{ align: 'middle' }} ii
        onClick={handleLogOut}
      >
        Log Out
      </Button>
    )
  } else {
    return null
  }
}

function AppRouter() {
  const { Header } = Layout;
  return (
    <Router history={history}>
      <div>
        <Layout>
          <Header style={{ color: 'white', fontSize: '20px' }}>
            <Col className="ant-col-xl-12">Vendors Dashboard</Col>
            <Col style={{ textAlign: 'right' }} className="ant-col-xl-12">
              <LogOutButton history={history} />
            </Col>
          </Header>
        </Layout>
        <Route path="/" exact component={Login} />
        <Route path="/upload_image" exact component={UploadImage} />
      </div>
    </Router>

  )
}

export default AppRouter;
