import { Button, Form, Input } from 'antd';
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {createUser} from "../../store/actions/userActions";


export const Registration = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        login: '',
        password: '',
        name: '',
        fullname: ''
    })

    const createUserMethod = async () => {
        if(formData.login && formData.password && formData.name){
            await createUser(dispatch, formData)
            navigation('/posts')
        }
    }

    return (
        <div>
            <Form
                name="basic"
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
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input value = {formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                </Form.Item>
                <Form.Item
                    label="Full name"
                    name="FullName"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Login"
                    name="Login"
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
                    <Button type="primary" htmlType="submit" onClick={() => createUserMethod()}>Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}