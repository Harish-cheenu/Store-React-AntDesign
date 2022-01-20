/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {
  Layout, Menu, Dropdown, Button,
} from 'antd';
import {
  SoundOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  DownOutlined,
} from '@ant-design/icons';

const CommonHeader = () => {
  const { Header } = Layout;
  const userMenu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          window.localStorage.setItem('login', 'False');
          document.location.href = '/';
        }}
      >
        Log Out
      </Menu.Item>
    </Menu>
  );
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        color: '#ffff',
        justifyContent: 'end',
        display: 'flex',
        position: 'relative',
        top: 0,
        width: '100%',
        zIndex: 1,
      }}
    >
      <Menu
        theme="dark"
        style={{
          padding: '10px 5px',
          justifyContent: 'end',
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
        <Menu.Item icon={<UserOutlined />}>
          <Dropdown overlay={userMenu}>
            <Button
              style={{
                background: 'none',
                color: '#ffff',
                border: 'none',
                padding: '0px',
              }}
            >
              User
              <DownOutlined />
            </Button>
          </Dropdown>
        </Menu.Item>
        <Menu.Item icon={<SoundOutlined />} />
        <Menu.Item icon={<ShoppingCartOutlined />} />
      </Menu>
    </Header>
  );
};
export default CommonHeader;
