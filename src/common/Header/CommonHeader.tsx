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
      <Menu.Item>
        <a rel="noopener noreferrer" href="/">
          Log Out
        </a>
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
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: '100',
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
