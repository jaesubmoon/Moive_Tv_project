/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';


function RightMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="login">
        <a href="/login">로그인</a>
      </Menu.Item>
      <Menu.Item key="join">
        <a href="/join">회원가입</a>
      </Menu.Item>
    </Menu>
  )
}

export default RightMenu;

