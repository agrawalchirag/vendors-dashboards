import React from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';

class PageHeader extends React.Component {

  handleLogOut = () => {
    localStorage.removeItem('authToken');
    this.props.history.push('/');
  }

  render() {
    const { Header } = Layout;
    return (
      <Layout>
        <Header style={{ color: 'white', fontSize: '20px' }}>
          Vendors Dashboard
            {localStorage.getItem('authToken') &&
            <Button
              style={{ float: "right", marginTop: "15px" }}
              type="primary ant-btn-round"
              onClick={this.handleLogOut}
            >
              Log Out
                </Button>
          }
        </Header>
      </Layout >
    );
  }
};

export default PageHeader;
