import React from 'react'
import {Menu, Layout} from 'antd'
import { Link } from 'react-router-dom'

const { Header, Content, Footer} = Layout;

const navItems = [
    {
        label: <Link to="/" >Главная</Link>,
        key: 'home',

    },
    {
        label: <Link to="/posts" >Посты</Link>,
        key: 'posts',
    },
    {
        label: <Link to="/login" >Вход</Link>,
        key: 'login',

    },
    {
        label: <Link to="/register" >Регистрация</Link>,
        key: 'register',

    },
]

export const Navbar = (props) => {
  return (
      <>
        <div>
          <nav>
              <Menu mode = "horizontal" items={navItems}/>
          </nav>
        </div>
          <div>
              <Content style={{padding: '20px 50px'}}>
                  <div className="site-layuot-content" style={{padding: 10, height: '100%' }}>
                      {props.children}
                  </div>
              </Content>

          </div>
      </>
  )
}