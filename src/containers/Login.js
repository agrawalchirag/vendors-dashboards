import React from 'react';
import {
  Form, Icon, Input, Button, Typography,
} from 'antd';
import Grid from 'antd/lib/card/Grid';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

class Login extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const { data } = await Axios.post('http://localhost:5000/signIn', values)
          if (!data.result._id) {
            throw new Error("Cannot find User")
          }
          this.props.history.push('/upload_image');
        }
        catch (e) {
          console.error(e);
        }
      }
    });

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Title } = Typography;
    return (
      <Grid style={{ backgroundColor: '#f1f1f1', height: '100vh', padding: '13%' }}>
        <Grid style={{
          backgroundColor: 'white', padding: '20px', textAlign: 'center', width: 400, margin: '0 auto',
          alignItems: 'center', borderRadius: '5px', boxShadow: '-2px 1px 23px #ccc',
        }}>
          <Title style={{ fontSize: 24, marginTop: 15, marginBottom: 30, }}>Login Form</Title>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item style={{ marginBottom: 20, }}>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{ height: 45, }} type="email" placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item style={{ marginBottom: 30, }}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{ height: 45, }} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary ant-btn-round" htmlType="submit" style={{ align: 'middle' }} >
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

