import React from 'react';
import {
  Form, Icon, Input, Button, Typography,
} from 'antd';
import Grid from 'antd/lib/card/Grid';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/upload_image');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Title } = Typography;
    return (
      <Grid style={{ padding: '175px 400px', backgroundColor: '#DCDCDC' }}>
        <Grid style={{ backgroundColor: 'white', padding: '20px', textAlign: 'center' }}>
          <Title level={3} strong>Login Form</Title>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ align: 'middle' }} >
                Log in
          </Button>
            </Form.Item>
          </Form>
        </Grid>
      </Grid>
    );
  }
}

const WrappedLogin = Form.create({ name: 'register' })(Login);

export default withRouter(WrappedLogin);

