import React, {useEffect, useState} from 'react'
import {Menu, Layout, Button} from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {ButtonUI} from "../ui/ButtonUI/ButtonUI";
import {exitUser} from "../../store/actions/userActions";

const { Header, Content, Footer} = Layout;

const navItemsNoLogin = [
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
        label: <Link to="/registration" >Регистрация</Link>,
        key: 'register',

    },
]

const navItemsLogin = [
    {
        label: <Link to="/" >Главная</Link>,
        key: 'home',

    },
    {
        label: <Link to="/posts" >Посты</Link>,
        key: 'posts',
    },
]


export const Navbar = (props) => {
    const dispatch = useDispatch();
    const {UserLogin} = useSelector(state => state.user)
    const ExitMethod = () => {
        localStorage.removeItem('token')
        dispatch(exitUser)
    }
  return (
      <>
        <div>
          <nav>
              {!UserLogin && <Menu mode = "horizontal" items={navItemsNoLogin}/>}
              {UserLogin &&
                  <>
                      <Menu mode = "horizontal" items={navItemsLogin}/>
                      <div style={{margin: '10px'}}>
                      <ButtonUI onClick={ExitMethod} label='Exit' />
                      </div>
                  </>

              }
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