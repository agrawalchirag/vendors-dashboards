import React from 'react';
import { Layout } from 'antd';
import { Button, Col } from 'antd';

class PageHeader extends React.Component {
  constructor(props) {
    super(props)
  };

  handleLogOut = () => {
    localStorage.removeItem('authToken');
    this.props.history.push('/');
  }

  render() {
    const { Header } = Layout;
    return (
      <Layout>
        <Header style={{ color: 'white', fontSize: '20px' }}>
          <Col className="ant-col-xl-12">Vendors Dashboard</Col>
          <Col style={{ textAlign: 'right' }} className="ant-col-xl-12">
            {localStorage.getItem('authToken') &&
              <Button
                type="primary ant-btn-round"
                style={{ align: 'middle' }}
                onClick={this.handleLogOut}
              >
                Log Out
            </Button>
            }
          </Col>
        </Header>
      </Layout >
    );
  }
};

export default PageHeader;
