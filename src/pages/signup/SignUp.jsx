import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate } from 'react-router';

function Signup() {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log(values);
        localStorage.setItem("signup", JSON.stringify(values));
        navigate("/")
    };

    return (
        <div className='login-page'>
            <div>
                <h2>Sign Up</h2>
                <Form
                    name='login'
                    className='login-form'
                    onFinish={onFinish}
                >
                    <Form.Item
                        name='firstname'
                        className='usern'
                        rules={[{ required: true, message: 'please enter the firstname!' }]}
                    >
                        <Input
                            className='input'
                            type='text'
                            placeholder="Firstname"
                        />
                    </Form.Item>

                    <Form.Item
                        name='lastname'
                        className='usern'
                        rules={[{ required: true, message: 'please enter the lastname!' }]}
                    >
                        <Input
                            className='input'
                            type='text'
                            placeholder="Lastname"
                        />
                    </Form.Item>

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
                            placeholder="Password"
                            prefix={<LockOutlined
                                className="site-form-item-icon" />}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            htmlType="submit"
                            type='primary'
                            shape="round"
                            className='login-button'>
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Signup;