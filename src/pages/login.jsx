import { Button, Checkbox, Form, Input, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);
    if (items.username === values.username && items.password === values.password) {
      navigate("/header")
    } else {
      notification.error({
        message: "user doest not exist"
      })
      navigate("/sign-up")
    }
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('signup'));
    if (items) {
      setItems(items);
    }
  }, []);
  console.log(items);

  return (
    <div className='login-page'>
      <div>
        <h2>Login</h2>
        <Form
          name='login'
          className='login-form'
          onFinish={onFinish}
        >
          <Form.Item
            name='username'
            className='usern'
            rules={[{ required: true, message: 'please enter the username!' }]}
          >
            <Input
              className='input'
              type='text'
              placeholder="Username"
              prefix={<UserOutlined
                className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            name='password'
            className='pass'
            rules={[{ required: true, message: 'please enter the password!' }]}
          >
            <Input.Password
              className='input'
              type='password'
              placeholder="password"
              prefix={<LockOutlined
                className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
            <Link
              className='login-forget'
              to="/sign-up">
              sign up?
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type='primary'
              shape="round"
              className='login-button'>
              LogIn
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
