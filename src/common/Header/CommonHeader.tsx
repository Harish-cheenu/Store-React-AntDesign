import React from 'react';
import { Layout, Menu } from 'antd';

const CommonHeader = () => {
  const { Header } = Layout;
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        color: '#ffff',
        justifyContent: 'end',
        display: 'flex',
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        style={{ width: '20px', justifyContent: 'end', display: 'flex' }}
      >
        <Menu.Item>User</Menu.Item>
      </Menu>
    </Header>
  );
};
export default CommonHeader;
