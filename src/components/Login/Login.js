import { Button, Form, Input } from 'antd';
import React, {useState} from "react";
import {loadingUser} from "../../store/actions/userActions";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

export const Login = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    })


    const loginUserMethod = async () => {
        if(formData.login && formData.password) {
            await loadingUser(dispatch, formData)
            navigation('/posts')
        }
    }

    return (
        <div>
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                autoComplete="off"
            >

                <Form.Item
                    label="Login"
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your login!',
                        },
                    ]}
                >
                    <Input value = {formData.login} onChange={(e) => setFormData({...formData, login: e.target.value})}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password value = {formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={() => loginUserMethod()}>Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}